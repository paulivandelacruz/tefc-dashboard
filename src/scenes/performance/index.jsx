import React from 'react'
import { Box, useTheme } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import { useGetUserPerformanceQuery } from '../../state/api'

const Performance = () => {
  const userId = useSelector((state) => state.global.userId)
  const { data, isLoading } = useGetUserPerformanceQuery(userId);
  const theme = useTheme();

  const columns = [
    {
        field: "_id",
        headerName: "ID",
        flex: 1,
    },
    {
        field: "userId",
        headerName: "USER ID",
        flex: 1,
    },
    {
        field: "createdAt",
        headerName: "CREATED AT",
        flex: 1,
    },
    {
        field: "products",
        headerName: "NO. OF PRODUCTS",
        flex: 0.5,
        sortable: false,
        renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "COST",
      flex: 1,
      renderCell: (params) => `₱${Number(params.value).toFixed(2)}`,
  },
]

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PERFORMANCE" subtitle="List Affiliate Sales Performance" />
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
            rows={(data && data.sales) || []}
            columns={columns}
            components={{
            }}
          />
        </Box>
    </Box>
  )
}

export default Performance