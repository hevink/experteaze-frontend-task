import { Box } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'
import Typography from '@mui/material/Typography'
import useResponsive from '../hooks/useResponsive'

const Hero = ({ handleSearch }) => {
  const isMobile = useResponsive('sm', 'down')
  return (
    <Box
      sx={{
        backgroundImage: 'url(/assets/images/hero-background.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: 'bold',
          fontSize: isMobile ? '28px' : '64px',
          lineHeight: '1.2',
          mb: 2,
          color: 'white',
          textAlign: 'center',
        }}
      >
        Get your home fixed in one click
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: '400',
          fontSize: isMobile ? '16px' : '32px',
          lineHeight: '1.5',
          mb: 4,
          color: 'white',
          textAlign: 'center',
        }}
      >
        Connecting you with top professionals for all your home service needs
      </Typography>
      <Box sx={{ width: isMobile ? '95%' : '70%' }}>
        <SearchBar onSearch={handleSearch} />
      </Box>
    </Box>
  )
}

export default Hero
