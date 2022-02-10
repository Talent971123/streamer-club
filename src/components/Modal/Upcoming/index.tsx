import React, { useState } from "react";
import { Button } from "components/Button";
import DateTimeInput from "components/DateTimeInput";
import { TeamsDropdown } from "components/Dropdown";
import { Input } from "components/Input";
import {
  ClubFuzzySearch,
  TeamFuzzySearch,
  LeaugeFuzzySearch,
} from "components/Dropdown/FuzzySearch";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { useMutation } from "@apollo/client";

import { Form, FormikProvider, useFormik, Field } from "formik"; //TODO: Refactor please use antd form

import { BsSave } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

import { ModalProps } from "types/components/Modal";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
} from "./index.style";
import axios from "axios";
import { apiBaseUrl, baseUrl } from "utils/constData";
import { mutate } from "graphql/match";

import { connect } from "react-redux";

import { Switch, Tooltip } from 'antd';
import {
  InfoCircleOutlined
} from '@ant-design/icons';

const defaultFieldsValues = {
  is_historic: false,
  status: "created",
};

const defaultMuxData = {
  playback_url: "",
  stream_url: "",
  stream_key: "",
};

const formInitialValues: Partial<any> = {}; /** TODO: add types */

const UpcomingModal: React.FC<ModalProps> = ({
  show = false,
  handleClose,
  clubInfo,
}) => {
  const [awayClubId, setAwayClubId] = useState(0);
  const [muxData, setMuxData] = useState(defaultMuxData);

  const [addMatch] = useMutation(mutate.INSERT_MATCH, {
    onCompleted() {
      // alert('Inserted new yeah')
      // TODO: Notifications module
    },
    onError(e) {
      console.log("error", e);
    },
  });

  const formik = useFormik<Partial<any>>({
    initialValues: formInitialValues,
    onSubmit: async (values, { resetForm }) => {

      /** request mux data */
      axios
        .post(apiBaseUrl + "/mux/live-stream", {
          playback_policy: "Public",
          reconnect_window: 300,
          new_asset_settings: {
            playback_policy: ["public"],
          },
        })
        .then((res) => {
          const { id: stream_id, stream_key, playback_ids } = res.data;
          const video_asset_id = playback_ids[0].id;
          const url = `${baseUrl}/club/${clubInfo.slug}/live/${video_asset_id}`;

          setMuxData({
            stream_key,
            playback_url: url,
            stream_url: `rtmps://global-live.mux.com:5222/app/${stream_key}`,
          });

          const objects = {
            ...defaultFieldsValues,
            ...values,
            club_id: clubInfo.id,
            stream_id,
            stream_key,
            video_asset_id,
            url,
          };

          addMatch({ variables: { objects } });
        })
        .catch((err) => {
          console.error("MUX request error:", err);
        });

      // resetForm();
    },
  });

  const { values, errors, touched, handleSubmit, handleChange } = formik;

  return (
    <ModalWrapper show={show}>
      <ModalContent show={show}>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <ModalHeader>
              <Text fSize={1.375} fWeight={600}>
                {"Add Upcoming Match"}
              </Text>
            </ModalHeader>
            <ModalBody>
              <Row flexDirection="column" gap={5}>
                <Text fWeight={600} fSize={1.0625}>
                  {"Match Details"}
                </Text>
                <Row templateCol="1fr 1fr" display="grid" gap={10}>
                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"Date & Time"}
                    </Text>
                    <DateTimeInput
                      name="start_datetime"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col></Col>
                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"League Name"}
                    </Text>
                    <LeaugeFuzzySearch
                      name="league_id"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"Round Name"}
                    </Text>
                    <Input
                      iColor="primary"
                      iSize="small"
                      iFont="normal"
                      iRadius="small"
                      placeholder="Round Name"
                      name="round_name"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"Select Team"}
                    </Text>
                    <TeamsDropdown
                      name="home_team_id"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"Home/Away Name"}
                    </Text>
                    <Input
                      name="name"
                      iColor="primary"
                      iSize="small"
                      iFont="normal"
                      iRadius="small"
                      placeholder="Home/Away"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"Opposition Club"}
                    </Text>
                    <ClubFuzzySearch
                      onChange={(v) => setAwayClubId(v)}
                      name="away_club_id"
                    />
                  </Col>
                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"Opposition Team"}
                    </Text>
                    <TeamFuzzySearch club_id={awayClubId} name="away_team_id" />
                  </Col>
                </Row>

                <Text fWeight={600} fSize={1.0625} padding="10px 0 0 0">
                  {"Stream Settings"}
                </Text>
                <Row templateCol="1fr 1fr" display="grid" gap={10}>

                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"Managed stream "}
                      <Tooltip
                        title="Turn this on if you will be using external streaming service. e.g. OBS streamlabs"
                        color={'black'}
                      >
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Text>
                    <Field name="ext_managed" >
                      {({
                        form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      }) => (<Switch onChange={e => setFieldValue('ext_managed', e)} />)}
                    </Field>
                  </Col>
                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"External Scoring "}
                      <Tooltip
                        title="Tunn this on if you will be overlaying your own scoring and timekeeping via a video mixer e.g. using a service such as LIGR"
                        color={'black'}
                      >
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Text>
                    <Field name="ext_scoring" >
                      {({
                        form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      }) => (<Switch onChange={e => setFieldValue('ext_scoring', e)} />)}
                    </Field>
                  </Col>

                </Row>


                <Text fWeight={600} fSize={1.0625} padding="10px 0 0 0">
                  {"Stream Details"}
                </Text>
                <Row flexDirection="column" gap={7}>
                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"RTMP Server URL"}
                    </Text>
                    <Input
                      value={muxData.stream_url}
                      readOnly
                      iColor="primary"
                      iSize="small"
                      iFont="normal"
                      iRadius="small"
                      placeholder="rtmp://global-live.mux.com:5222/app	"
                    />
                  </Col>
                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"Stream Key"}
                    </Text>
                    <Input
                      value={muxData.stream_key}
                      readOnly
                      iColor="primary"
                      iSize="small"
                      iFont="normal"
                      iRadius="small"
                      placeholder="MUX_TOKEN_ID=0ea2cf07-5919-4e7c-85eb-fa8c72fdc16f"
                    />
                  </Col>
                  <Col>
                    <Text fSize={0.875} padding="0 0 7px 0">
                      {"Stream URL"}
                    </Text>
                    <Input
                      value={muxData.playback_url}
                      readOnly
                      iColor="primary"
                      iSize="small"
                      iFont="normal"
                      iRadius="small"
                      placeholder="https://streamer.com/club/enter-stream-url"
                    />
                  </Col>
                </Row>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button
                bColor="primary"
                bSize="small"
                icon={<ImCancelCircle />}
                onClick={handleClose}
                type="button"
              >
                {"Cancel"}
              </Button>
              <Button
                type="submit"
                bColor="primary"
                bSize="small"
                icon={<BsSave />}
              >
                {"Save"}
              </Button>
            </ModalFooter>
          </Form>
        </FormikProvider>
      </ModalContent>
    </ModalWrapper>
  );
};

const mapStateToProps = (state) => ({
  clubInfo: state.club.info,
});

export default connect(mapStateToProps)(UpcomingModal);
