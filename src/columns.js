export const COLUMNS = [
  {
    Header: "Id", // Will be render in  {column.render("Header")}-> ở file BasicTable
    Footer: "Id",
    accessor: "id" //accessor phải trùng với trường dữ liệu của backend trả về ̣-> xem trong file data.json
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name"
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name"
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth"
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country"
  },
  { Header: "Phone", Footer: "Phone", accessor: "phone" }
];

export const GROUP_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id"
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name"
      }
    ]
  }
];
