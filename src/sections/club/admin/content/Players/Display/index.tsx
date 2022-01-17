import React, { useContext, useState } from "react";
//  component
// import { Row, Col } from "components/Layout";
// import { Table } from "components/Table";
// import { Button } from "components/Button";
// import { Avatar } from "components/Avatar";
// import { Player_A_Modal, Player_U_Modal } from "components/Modal";

// //  import react icons
// import { BsPlus } from "react-icons/bs";
// //  styled component
import { DisplayWrapper } from "./display.style";
// // asset
// import _ from "lodash";
// import { Text } from "components/Text";
// import DefaultSrc from "assets/images/layout/group.png";
// import { ClubAdminContext } from "pages/club/[club_slug]/admin";

// const Action: React.FC<{ level: string; pid: number; onHandleEdit: any }> = ({
//   level,
//   pid,
//   onHandleEdit,
// }) => {
//   return (
//     <>
//       <Row justifyContent="center" alignItems="center" gap={20}>
//         <Col>
//           <Text
//             mode="p"
//             fSize={16}
//             fColor={level == "Player Pro" ? "green.100" : "red.100"}
//           >
//             {level}
//           </Text>
//         </Col>
//         <Col>
//           <div onClick={() => onHandleEdit(pid)}>
//             <Text
//               fSize={16}
//               bColor="primary"
//               bSize="small"
//               tDecorations="underline"
//               fColor="gray.200"
//               hoverStyle={{ fColor: "white" }}
//             >
//               {"Edit"}
//             </Text>
//           </div>
//         </Col>
//       </Row>
//     </>
//   );
// };

const DisplaySection: React.FC = () => {
  // const club = useContext(ClubAdminContext);
  // const [a_show, setAShow] = useState<boolean>(false);
  // const [u_show, setUShow] = useState<boolean>(false);
  // const [pid, setPid] = useState<number>();

  // const onHandleEdit = (pid: number) => {
  //   console.log(`Edit player with id ${pid}`);
  //   setPid(pid);
  //   setUShow(true);
  // };

  // const datasource = () => {
  //   if (_.isUndefined(club.players)) {
  //     return [
  //       {
  //         "Player Photo": "",
  //         "Player Name": "",
  //         Team: "",
  //         Status: "",
  //       },
  //     ];
  //   }
  //   return club.players.map((player) => ({
  //     "Player Photo": (
  //       <Avatar
  //         src={_.isNull(player.image) ? DefaultSrc : player.image}
  //         radius="circle"
  //         mode="small"
  //       />
  //     ),
  //     "Player Name": `${player.first_name} ${player.last_name}`,
  //     Team: player.team?.name,
  //     Status: (
  //       <Action
  //         pid={player.id}
  //         level={player.is_professional ? "Player Pro" : "Standard"}
  //         onHandleEdit={onHandleEdit}
  //       />
  //     ),
  //   }));
  // };

  return (
    <DisplayWrapper>
      dashdjsdga
      {/* <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Row justifyContent="flex-end">
            <Button
              bColor="primary"
              bSize="small"
              icon={<BsPlus />}
              onClick={() => setAShow(true)}
            >
              {"Add Player"}
            </Button>
          </Row>
        </Col>
        <Col item={24}>
          <Table data={datasource()} />
        </Col>
      </Row>
      <Player_A_Modal show={a_show} handleClose={() => setAShow(false)} />
      {!_.isUndefined(pid) ? (
        <Player_U_Modal
          show={u_show}
          handleClose={() => setUShow(false)}
          pid={pid}
        />
      ) : null} */}
    </DisplayWrapper>
  );
};

export default DisplaySection;
