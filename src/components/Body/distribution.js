import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const OuterDiv = styled.div`
  width: 1320px;
  margin: 0 auto;

  border: 2px solid green;
  box-sizing: border-box;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 80px;
  line-height: 98px;
  margin-bottom: 40px;
  margin: 80px 0px;
`;

const H2 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;

  margin: 32px 0px;
`;

const Img = styled.img`
  margin: 120px 0px;
`;

const Table = styled.table`
  margin: 32px 0px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
`;

const Thead = styled.thead`
  display: flex;
  justify-content: space-between;
`;

const Tr = styled.tr`
  margin: 32px 0px;
`;

function Distribution() {
  const data = React.useMemo(
    () => [
      {
        col1: "Private Sale",
        col2: "14,500,000",
        col3: "75,000,000",
        col4: "15.00%",
      },
      {
        col1: "Private Sale",
        col2: "14,500,000",
        col3: "75,000,000",
        col4: "15.00%",
      },
      {
        col1: "Public(IDO/IEO)",
        col2: "750,000",
        col3: "2,500,000",
        col4: "0.50%",
      },
      {
        col1: "Community & Ecosystem",
        col2: "-",
        col3: "150,000,000",
        col4: "30.00%",
      },
      {
        col1: "Team",
        col2: "-",
        col3: "32,500,000",
        col4: "6.50%",
      },
      {
        col1: "Advisory",
        col2: "-",
        col3: "15,000,000",
        col4: "3.00%",
      },
      {
        col1: "R&D",
        col2: "-",
        col3: "25,000,000",
        col4: "5.00%",
      },
      {
        col1: "Marketing",
        col2: "-",
        col3: "75,000,000",
        col4: "15.00%",
      },
      {
        col1: "Reserve",
        col2: "-",
        col3: "75,000,000",
        col4: "15.00%",
      },
      {
        col1: "Staking Reward",
        col2: "-",
        col3: "50,000,000",
        col4: "10.00%",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Category",
        accessor: "col1", // accessor is the "key" in the data
        Footer: "Total",
      },
      {
        Header: "Market Cap($)",
        accessor: "col2",
        Footer: "15,250,000",
      },
      {
        Header: "# of BTMT",
        accessor: "col3", // accessor is the "key" in the data
        Footer: "500,000,000",
      },
      {
        Header: "% of Total",
        accessor: "col4",
        Footer: "100.00%",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = tableInstance;

  return (
    <OuterDiv>
      <H1>Token Distribution</H1>
      <Img src="assets/BTMT_Token.png" alt="Token Distribution"></Img>
      <H2>BTMT Allocation</H2>
      <div>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </Tr>
            ))}
          </Thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            {footerGroups.map((group) => (
              <tr {...group.getFooterGroupProps()}>
                {group.headers.map((column) => (
                  <td {...column.getFooterProps()}>
                    {column.render("Footer")}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        </Table>
      </div>
    </OuterDiv>
  );
}

export default Distribution;
