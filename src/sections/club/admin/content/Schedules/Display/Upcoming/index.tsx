import React, { useContext, useState } from "react";
//  component
import { Row, Col } from "components/Layout";
import { Table } from "components/Table";
import { Button } from "components/Button";
import { UpcomingModal } from "components/Modal";

import { useSubscription } from "@apollo/client";
import { connect } from "react-redux";

//  import react icons
import { BsPlus } from "react-icons/bs";
//  styled component
import { DisplayWrapper } from "./upcoming.style";
// asset
import { ClubAdminContext } from "pages/club/[club_slug]/admin";
import { subscribe } from "graphql/match";
import moment from "moment";
import { dateDisplayFormat } from "utils/constData";

const UpcomingSection = (props) => {
  const { clubInfo } = props;
  const club = useContext(ClubAdminContext);
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState([]);

  useSubscription(subscribe.SUB_MATCHES, {
    variables: {
      where: {
        club_id: { _eq: clubInfo.id },
        is_historic: { _eq: false },
        status: { _neq: "completed" },
      },
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data.matches &&
        setData(
          data.matches.map((match) => ({
            Date: moment(match.start_datetime).format(dateDisplayFormat),
            Time: moment(match.start_datetime).format("HH:mm a"),
            League: match.league.name,
            "Round Name": match.round_name,
            Team: match.home_team.name,
            "Opposition Club": match.away_team.club.name,
            "Opposition Team": match.away_team.name,
            "Stream Link": match.url,
          }))
        );
    },
  });

  const onModal = (flag: boolean) => {
    setShow(flag);
  };

  return (
    <DisplayWrapper>
      <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Row justifyContent="flex-end">
            <Button
              bColor="primary"
              bSize="small"
              icon={<BsPlus />}
              onClick={() => onModal(true)}
            >
              {"Add Upcoming Match"}
            </Button>
          </Row>
        </Col>
        <Col item={24}>
          <Table data={data} />
        </Col>
      </Row>
      <UpcomingModal show={show} handleClose={() => onModal(false)} />
    </DisplayWrapper>
  );
};

const mapStateToProps = (state) => ({
  clubInfo: state.club.info,
});

export default connect(mapStateToProps)(UpcomingSection);
