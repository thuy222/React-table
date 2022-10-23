import { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./data.json";
import "./table.css";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns: columns,
    data: data
  });

  const {
    getTableProps, // a function need to be destruct in table tag
    getTableBodyProps, // a function need to be destruct in body tag
    headerGroups, //an array contain columns heading information which belong inside thead
    footerGroups,
    rows,
    prepareRow
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          return (
            <tr {...headerGroup.getFooterGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <th {...column.getHeaderProps()}>
                    {/* Name Header must be match to data in data.json */}
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup) => {
          return (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => {
                return (
                  <td {...column.getFooterProps()}>
                    {/* Name Footer must be match to data in data.json */}
                    {column.render("Footer")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tfoot>
    </table>
  );
};

export default BasicTable;
