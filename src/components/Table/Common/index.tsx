import React from "react";
// import styled component
import { StyledTable } from "components/Table/Common/table.style";

export default ({ data }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);
const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
