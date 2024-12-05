import React from 'react'
import { Card, CardContent, Typography, Button, Box, Avatar, useTheme } from '@mui/material'
import { Star, WorkOutline } from '@mui/icons-material'
import { observer } from 'mobx-react-lite'

const ServiceCard = observer(({ service, store }) => {
  const theme = useTheme()
  const isSelected = store.isServiceSelected(service.id)

  const handleCompare = () => {
    if (isSelected) {
      store.removeService(service.id)
    } else {
      store.addService(service)
    }
  }

  return (
    <Card
      sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 4,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform 0.3s ease',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
          zIndex: 1,
        },
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 3,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <img
          src={service.image}
          alt={service.freelancer}
          style={{
            width: 100,
            height: 100,
            mb: 2,
            border: `4px solid ${theme.palette.primary.light}`,
            boxShadow: 3,
            bgcolor: 'rgba(255,255,255,0.2)',
            color: theme.palette.primary.main,
            borderRadius: '100%',
          }}
        />

        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontWeight: 'bold',
            color: theme.palette.text.primary,
            textAlign: 'center',
          }}
        >
          {service.freelancer}
        </Typography>

        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(33, 150, 243, 0.1)',
            border: '1px solid rgba(33, 150, 243, 0.3)',
            borderRadius: 4,
            px: 2,
            py: 0.5,
            mb: 2,
            alignSelf: 'center',
          }}
        >
          <WorkOutline
            sx={{
              fontSize: 18,
              mr: 1,
              color: theme.palette.primary.main,
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 'medium',
            }}
          >
            {service.name}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'rgba(255,255,255,0.1)',
              p: 1,
              borderRadius: 2,
            }}
          >
            <Typography variant="body1">{service.price}</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'rgba(255,255,255,0.1)',
              p: 1,
              borderRadius: 2,
            }}
          >
            <Star sx={{ mr: 1, color: theme.palette.warning.main }} />
            <Typography variant="body1">{service.rating}/5</Typography>
          </Box>
        </Box>

        <Button
          fullWidth
          variant={isSelected ? 'contained' : 'outlined'}
          color="primary"
          onClick={handleCompare}
          sx={{
            borderRadius: 2,
            py: 1.5,
            fontWeight: 'bold',
            mt: 1,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {isSelected ? 'Remove from Compare' : 'Compare'}
        </Button>
      </CardContent>
    </Card>
  )
})

export default ServiceCard
