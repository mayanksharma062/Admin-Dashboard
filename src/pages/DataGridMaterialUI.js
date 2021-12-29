import * as React from "react";
import { Divider, Toolbar, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PageHeader from "../components/PageHeader";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 160,
    color: "inherit",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 210,
    color: "inherit",
  },
  { field: "lastName", headerName: "Last name", width: 190, color: "inherit" },
  {
    field: "age",
    headerName: "Age",
    // type: "number",
    width: 190,
    color: "inherit",
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
    color: "inherit",
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataGridMaterialUI() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rowsPages, setRowsPages] = React.useState([5, 10, 15]);

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e);
  };

  return (
    <>
      {console.log("Mayank")}
      <Toolbar />
      <div style={{ margin: "20px" }}>
        {/* <Typography
          sx={{
            fontSize: "1.5rem",
          }}
        >
          <strong>Data Grid</strong>
        </Typography>
        <Divider sx={{ backgroundColor: "white", mt: 3 }} /> */}
        <div style={{ height: 380 }}>
          {/* <Typography sx={{ p: 2 }}>
            Data Grid <br /> A fast and extendable data table and data grid for
            React, made by Material-UI. Official docs
          </Typography> */}
          <PageHeader title="Data Grid" />
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={rowsPerPage}
            rowsPerPageOptions={rowsPages}
            rowsPerPage={rowsPerPage}
            checkboxSelection
            onPageSizeChange={handleChangeRowsPerPage}
            sx={{
              color: "inherit",
              "*": {
                color: "white",
              },
              ".MuiDataGrid-checkboxInput": {
                color: "inherit",
              },
              // ".MuiDataGrid-footerContainer": {
              //   "*": {
              //     color: "white",
              //   },
              // },
            }}
          />
          <Toolbar />
        </div>
      </div>
    </>
  );
}
