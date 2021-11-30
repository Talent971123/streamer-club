import React from "react";
// import styled component
import { StyledTable } from "components/Table/Common/table.style";

const Table = ({ data }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);
const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <thead>
      <tr>
        {titles.map((title: string, index: number) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item: any, index: number) => (
        <tr key={index}>
          {titles.map((title: string, index: number) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

export default Table;
