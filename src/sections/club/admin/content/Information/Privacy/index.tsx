import React, { useContext } from "react";
import { Text } from "components/Text";
import { Col, Row } from "components/Layout";
import ReactToggle from "react-toggle";
// import styled component
import { ApplyButton, PrivacyWrapper } from "./privacy.style";
import { ClubAdminContext, ClubDetailsContext } from "pages/club/[club_slug]/admin";
import { useMutation } from "@apollo/client";
import admin from "graphql/club/admin";
import _ from "lodash";
import { s3UploadFile } from "utils/s3-helper";
const PrivacySection: React.FC = () => {
  const { clubDetails, setClubDetails } = useContext(ClubDetailsContext);
  const club = useContext(ClubAdminContext);
  const [updateClub] = useMutation(admin.UPDATE_CLUB_BY_ID, {
    onCompleted() {
      setClubDetails(null);
      window.location.reload();
    },
    onError(e) {
      console.log(e, "error")
    },
  });
  const applyChanges = async () => {
    console.log(clubDetails, "details");
    const slug: string = club.slug ?? "";
    let image: string | null = null;
    let banner_image: string | null = null;

    if (!_.isNull(clubDetails.file)) {
      const s3res: any = await s3UploadFile("Club", slug, clubDetails.file);
      image = s3res.location;
    } else {
      if (!_.isEmpty(clubDetails.logo)) {
        image = clubDetails.logo;
      }
    }

    // if (!_.isNull(clubDetails.banner_file)) {
    //   const s3res2: any = await s3UploadFile("Club", slug, clubDetails.banner_file);
    //   banner_image = s3res2.location;
    // } else {
    //   if (!_.isEmpty(clubDetails.banner_image)) {
    //     banner_image = clubDetails.banner_image;
    //   }
    // }
    // console.log(clubDetails.banner_file, "banner");
    delete clubDetails.file;
    // delete clubDetails.banner_file;

    await updateClub({
      variables:{
        id: club?.id,
        _set: {
          ...clubDetails,
          logo: image,
          banner_image: banner_image,
        },
      },
    });
  };
  return (
    <PrivacyWrapper>
      <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Text fSize={1.5} fWeight={700} mode="p" fColor="gray.600">
            {"Privacy"}
          </Text>
          <Text
            fSize={0.9375}
            fWeight={600}
            mode="p"
            fColor="gray.600"
            padding="10px 0"
          >
            {"Private Profile"}
          </Text>
        </Col>
        <Col item={24}>
          <Row gap={10} flexDirection="column">
            <Row justifyContent="space-between">
              <Col>
                <Text fSize={0.875} fWeight={500} fColor="gray.300">
                  {
                    "Only people who you share your profile domain with will be able to access your content."
                  }
                </Text>
              </Col>
              <Col item={1}>
                <ReactToggle onChange={() => console.log(`1`)} /> {/* Convert to andt swtich */}
              </Col>
            </Row>
            <Row justifyContent="space-between">
              <Col>
                <Text fSize={0.875} fWeight={500} fColor="gray.300">
                  {"Placeholder."}
                </Text>
              </Col>
              <Col item={1}>
                <ReactToggle onChange={() => console.log(`2`)} /> {/* Convert to andt swtich */}
              </Col>
            </Row>
          </Row>
        </Col>
        <Col item={24}>
          <Row alignItems="flex-end" justifyContent="flex-end" padding="20px 0 0 0">
            <ApplyButton bColor="warning" onClick={applyChanges}>Apply Changes</ApplyButton>
          </Row>
        </Col>
      </Row>
    </PrivacyWrapper>
  );
};

export default PrivacySection;
