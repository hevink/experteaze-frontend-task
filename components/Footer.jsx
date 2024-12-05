import React from 'react'
import { Box, Typography, Link, IconButton, Divider, Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        color: 'primary.contrastText',
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="body2">
              We are dedicated to providing the best services and products to our customers. Your
              satisfaction is our priority.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" underline="hover" display="block">
                Home
              </Link>
              <Link href="/" color="inherit" underline="hover" display="block">
                About
              </Link>
              <Link href="/" color="inherit" underline="hover" display="block">
                Services
              </Link>
              <Link href="/" color="inherit" underline="hover" display="block">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: info@example.com</Typography>
            <Typography variant="body2">Phone: +123 456 7890</Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'divider' }} />

        {/* Footer Bottom */}
        <Typography variant="body2" align="center" sx={{ color: 'primary.contrastText' }}>
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
