import React, { useContext, useState } from "react";
//  component
import { Row, Col } from "components/Layout";
import { Table } from "components/Table";
import { Button } from "components/Button";
import { UpcomingModal } from "components/Modal";

//  import react icons
import { BsPlus } from "react-icons/bs";
//  styled component
import { DisplayWrapper } from "./upcoming.style";
// asset
import { ClubAdminContext } from "pages/club/[club_slug]/admin";

const data = [
  {
    Date: "Date",
    Time: "Time",
    League: "League",
    "Round Name": "Round Name",
    Team: "Team",
    "Opposition Club": "Opposition Club",
    "Opposition Team": "Opposition Team",
    "Stream Link": "Stream Link",
  },
  {
    Date: "Date",
    Time: "Time",
    League: "League",
    "Round Name": "Round Name",
    Team: "Team",
    "Opposition Club": "Opposition Club",
    "Opposition Team": "Opposition Team",
    "Stream Link": "Stream Link",
  },
];

const UpcomingSection: React.FC = () => {
  const club = useContext(ClubAdminContext);
  const [show, setShow] = useState<boolean>(false);

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

export default UpcomingSection;
