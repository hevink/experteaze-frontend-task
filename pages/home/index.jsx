import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { services } from '../api/services/data'
import { useComparisonStore } from '../../stores/comparisonStore'
import Hero from '../../components/Hero'
import useResponsive from '../../hooks/useResponsive'
import { Typography } from '@mui/material'
import ServiceCard from '../../components/ServiceCard'
import ComparisonTable from '../../components/ComparisonTable'
import Grid from '@mui/material/Grid2'

export default function Home() {
  const isMobile = useResponsive('sm', 'down')

  const [filteredServices, setFilteredServices] = useState(services)
  const comparisonStore = useComparisonStore()

  const handleSearch = (query) => {
    if (query) {
      const results = services.filter((service) =>
        service.name.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredServices(results)
    } else {
      setFilteredServices(services)
    }
  }

  return (
    <Box>
      <Hero handleSearch={handleSearch} />
      <Box sx={{ px: isMobile ? 2 : 6, pb: 4, width: '100%' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            width: '100%',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 24,
            lineHeight: '1.5',
            letterSpacing: '-0.015em',
            my: 4,
          }}
        >
          Services
        </Typography>
        <Grid container spacing={3} alignItems="stretch">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={service.id}>
                <ServiceCard service={service} store={comparisonStore} />
              </Grid>
            ))
          ) : (
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                width: '100%',
                mt: 4,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 24,
                lineHeight: '1.5',
                letterSpacing: '-0.015em',
              }}
            >
              No results found
            </Typography>
          )}
        </Grid>
        <ComparisonTable store={comparisonStore} />
      </Box>
    </Box>
  )
}
