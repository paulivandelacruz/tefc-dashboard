import React from 'react'
import { Box, useTheme } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid'
import Header from '../../components/Header'
import { useGetAdminsQuery } from '../../state/api'

const Admin = () => {
  const { data, isLoading } = useGetAdminsQuery();
  const theme = useTheme();

  const columns = [
    {
        field: "_id",
        headerName: "ID",
        flex: 1,
    },
    {
        field: "name",
        headerName: "NAME",
        flex: 0.5,
    },
    {
        field: "email",
        headerName: "EMAIL",
        flex: 1,
    },
    {
        field: "phoneNumber",
        headerName: "PHONE NUMBER",
        flex: 0.5,
        renderCell: (params) => {
            return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
        }
    },
    {
        field: "country",
        headerName: "COUNTRY",
        flex: 0.4,
    },
    {
        field: "occupation",
        headerName: "OCCUPATION",
        flex: 1,
    },
    {
        field: "role",
        headerName: "ROLE",
        flex: 0.5,
    },
]

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADMINS" subtitle="List of Top Exchange Food Corp. Admins" />
        <Box
          mt="40px"
          height="70vh"
          sx={{
              "& .MuiDataGrid-root": {
              border: "none"
            },
              "& .MuiDataGrid-cell": {
              borderBottom: "none"
            },
              "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
            },
              "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.primary.light,
            },
              "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`
            },
          }}
        >
          <DataGrid 
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data || []}
            columns={columns}
            components={{
            }}
          />
        </Box>
    </Box>
  )
}

export default Admin