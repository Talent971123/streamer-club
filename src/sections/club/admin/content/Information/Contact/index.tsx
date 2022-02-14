import React, { useContext, useEffect } from "react";
import { Text } from "components/Text";
import { useInputHOC } from "components/hoc";
import { Col, Row } from "components/Layout";
// import styled component
import { ContactWrapper, Commmon } from "./contact.style";
import { ClubAdminContext, ClubDetailsContext } from "pages/club/[club_slug]/admin";
const Input = useInputHOC(Commmon);

const ContactSection: React.FC = () => {
  const club = useContext(ClubAdminContext);
  const {clubDetails, setClubDetails} = useContext(ClubDetailsContext);
  useEffect(() => {
    setClubDetails({
      ...clubDetails,
      address_1: club?.address_1,
      address_2: club?.address_2,
      city: club?.city,
      state: club?.state,
      postcode: club?.postcode,
    });
  }, [club]);

  return (
    <ContactWrapper>
      <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Text fSize={1.5} fWeight={700} mode="p" fColor="gray.600">
            {"Contact Details"}
          </Text>
          <Text fSize={0.875} fWeight={500} fColor="gray.300">
            {"This information will not be shared publicly."}
          </Text>
        </Col>
        <Col item={24}>
          <Row justifyContent="space-between" gap={10}>
            <Col item={12}>
              <Row flexDirection="column">
                <Col item={24}>
                  <Text fSize={0.875} fWeight={500} fColor="gray.300">
                    {"Address Line 1"}
                  </Text>
                  <Input
                    iColor="primary"
                    iSize="small"
                    iFont="normal"
                    iRadius="small"
                    placeholder="Address Line 1"
                    defaultValue={club?.address_1}
                    onChange={(e) => setClubDetails({...clubDetails, address_1: e.target.value})}
                  />
                </Col>
              </Row>
            </Col>
            <Col item={12}>
              <Row flexDirection="column">
                <Col item={24}>
                  <Text fSize={0.875} fWeight={500} fColor="gray.300">
                    {"Address Line 2"}
                  </Text>
                  <Input
                    iColor="primary"
                    iSize="small"
                    iFont="normal"
                    iRadius="small"
                    placeholder="Address Line 2"
                    defaultValue={club?.address_2}
                    onChange={(e) => setClubDetails({...clubDetails, address_2: e.target.value})}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col item={24}>
          <Row justifyContent="space-between" gap={10}>
            <Col item={8}>
              <Row flexDirection="column">
                <Col item={24}>
                  <Text fSize={0.875} fWeight={500} fColor="gray.300">
                    {"City"}
                  </Text>
                  <Input
                    iColor="primary"
                    iSize="small"
                    iFont="normal"
                    iRadius="small"
                    placeholder="City"
                    defaultValue={club?.city}
                    onChange={(e) => setClubDetails({...clubDetails, city: e.target.value})}
                  />
                </Col>
              </Row>
            </Col>
            <Col item={8}>
              <Row flexDirection="column">
                <Col item={24}>
                  <Text fSize={0.875} fWeight={500} fColor="gray.300">
                    {"State"}
                  </Text>
                  <Input
                    iColor="primary"
                    iSize="small"
                    iFont="normal"
                    iRadius="small"
                    placeholder="State"
                    defaultValue={club?.state}
                    onChange={(e) => setClubDetails({...clubDetails, state: e.target.value})}
                  />
                </Col>
              </Row>
            </Col>
            <Col item={8}>
              <Row flexDirection="column">
                <Col item={24}>
                  <Text fSize={0.875} fWeight={500} fColor="gray.300">
                    {"PostCode"}
                  </Text>
                  <Input
                    iColor="primary"
                    iSize="small"
                    iFont="normal"
                    iRadius="small"
                    placeholder="PostCode"
                    defaultValue={club?.postcode}
                    onChange={(e) => setClubDetails({...clubDetails, postcode: e.target.value})}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </ContactWrapper>
  );
};

export default ContactSection;
