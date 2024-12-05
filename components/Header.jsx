import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Link from 'next/link'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/' },
    { label: 'Services', href: '/' },
    { label: 'Contact', href: '/' },
  ]

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left section: Title */}
        <Typography variant="h6" sx={{ flexGrow: 0, fontWeight: 'bold' }}>
          EXPERTEASE
        </Typography>

        {/* Centered Menu */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              component={Link}
              href={item.href}
              sx={{ textTransform: 'none' }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Right section: Login Button */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button variant="contained">Login</Button>
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton color="inherit" edge="start" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={handleMenuClose}
                component={Link}
                href={item.href}
              >
                {item.label}
              </MenuItem>
            ))}
            <MenuItem onClick={handleMenuClose} component={Link} href="/login">
              Login
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
