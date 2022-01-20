import React from "react";
// import styled component
import { StyledTable, EmptyWrapper } from "components/Table/Common/table.style";
import { AiOutlineWarning } from "react-icons/ai";
import { Row } from "components/Layout";

import _ from "lodash";
import { Text } from "components/Text";

const Table: React.FC<any> = ({ data, onHandleClick }) => {
  const _onHandleChange = (e: any) => {
    onHandleClick && onHandleClick(e);
  };

  if (_.isEmpty(data)) {
    return (
      <EmptyWrapper>
        <Row flexDirection="column" justifyContent="center" alignItems="center">
          <AiOutlineWarning size={100} />
          <Text fSize={17}>{"No Data"}</Text>
        </Row>
      </EmptyWrapper>
    );
  }
  return (
    <TableMarkup
      titles={Object.keys(data[0])}
      data={data}
      _onClick={_onHandleChange}
    />
  );
};
const TableMarkup = ({ titles, data, _onClick }) => (
  <StyledTable>
    <table>
      <thead>
        <tr>
          {titles.map((title: string, index: number) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => (
          <tr key={index} onClick={() => _onClick(index)}>
            {titles.map((title: string, index: number) => (
              <td key={index}>{item[title]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </StyledTable>
);

export default Table;
