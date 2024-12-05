import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Rating,
  TableSortLabel,
} from '@mui/material'

const ComparisonTable = observer(({ store }) => {
  const { selectedServices } = store
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('freelancer')

  if (selectedServices.length === 0) return null

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const sortData = (data, order, orderBy) => {
    const sortedData = [...data].sort((a, b) => {
      if (orderBy === 'rating') {
        return order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]
      }
      if (orderBy === 'price') {
        return order === 'asc'
          ? parseFloat(a[orderBy].replace(/[^\d.-]/g, '')) -
              parseFloat(b[orderBy].replace(/[^\d.-]/g, ''))
          : parseFloat(b[orderBy].replace(/[^\d.-]/g, '')) -
              parseFloat(a[orderBy].replace(/[^\d.-]/g, ''))
      }
      const aValue = a[orderBy] || ''
      const bValue = b[orderBy] || ''

      return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    })
    return sortedData
  }

  const sortedServices = sortData(selectedServices, order, orderBy)

  return (
    <Box
      sx={{
        width: '100%',
        p: 2,
        backgroundColor: '#f9f9fc',
        borderRadius: 2,
        my: 4,
      }}
    >
      <Typography
        sx={{
          mb: 3,
          fontWeight: 600,
          color: 'primary.main',
          textAlign: 'center',
          fontSize: '20px',
        }}
      >
        Service Comparison
      </Typography>
      <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 2 }}>
        <Table
          sx={{
            '& .MuiTableCell-root': {
              py: 2,
              px: 3,
              borderColor: 'divider',
            },
          }}
        >
          <TableHead
            sx={{
              backgroundColor: 'primary.light',
              borderBottom: '2px solid primary.main',
            }}
          >
            <TableRow>
              {['Freelancer', 'Service', 'Price', 'Rating'].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: 'bold',
                    color: 'primary.contrastText', // Keeps the header text white
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    fontSize: '12px',
                  }}
                >
                  <TableSortLabel
                    active={orderBy === header.toLowerCase()}
                    direction={orderBy === header.toLowerCase() ? order : 'asc'}
                    onClick={() => handleRequestSort(header.toLowerCase())}
                    sx={{
                      color: 'primary.contrastText', // Keeps the text white by default
                      '& .MuiTableSortLabel-icon': {
                        color: 'primary.contrastText', // Keeps the arrow white by default
                      },
                      '&.MuiTableSortLabel-root': {
                        color: 'primary.contrastText', // Ensures the text stays white when not active
                      },
                      '&:hover': {
                        color: 'primary.contrastText', // Prevents color change on hover for the text
                        '& .MuiTableSortLabel-icon': {
                          color: 'primary.contrastText', // Keeps the arrow white on hover
                        },
                      },
                      '&.MuiTableSortLabel-active': {
                        color: 'primary.contrastText', // Ensures text stays white when sorted
                        '& .MuiTableSortLabel-icon': {
                          color: 'primary.contrastText', // Keeps the arrow white when sorted
                        },
                      },
                    }}
                  >
                    {header}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedServices.map((service) => (
              <TableRow key={service.id}>
                <TableCell>{service.freelancer}</TableCell>
                <TableCell>{service.name}</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
                  {service.price}
                </TableCell>
                <TableCell>
                  <Rating
                    value={service.rating}
                    precision={0.5}
                    readOnly
                    sx={{ color: 'primary.main' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
})

export default ComparisonTable
