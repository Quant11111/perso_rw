import React from 'react'

import { Box } from '@mui/material'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { themeSaaSmile } from 'src/theme'

import AppbarButton from './AppbarButton'

const Appbar: React.FC = () => {
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <Box
      className="appbar"
      mt={3}
      mx={3}
      px={1}
      borderRadius={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 'fill-available',
        height: '64px',
        background: themeSaaSmile.palette.white,
        boxShadow: themeSaaSmile.shadows.small,
      }}
    >
      {isAuthenticated && (
        <AppbarButton
          isActive={routes.profile() === location.pathname}
          label="Profile"
          onClick={() => navigate(routes.profile())}
        />
      )}
      {currentUser?.roles.includes('ADMIN') && (
        <AppbarButton
          isActive={routes.admin() === location.pathname}
          label="Admin"
          onClick={() => navigate(routes.admin())}
        />
      )}
      <AppbarButton
        isActive={routes.home() === location.pathname}
        label="SaaSmile"
        onClick={() => navigate(routes.home())}
      />

      <AppbarButton
        isActive={routes.techStack() === location.pathname}
        label="TechStack"
        onClick={() => navigate(routes.techStack())}
      />

      <AppbarButton
        isActive={routes.contact() === location.pathname}
        label="Contact us"
        onClick={() => navigate(routes.contact())}
      />

      <AppbarButton
        isActive={routes.aboutUs() === location.pathname}
        label="About us"
        onClick={() => navigate(routes.aboutUs())}
      />

      {!isAuthenticated && (
        <AppbarButton
          isActive={routes.login() === location.pathname}
          variant="outlined"
          label="Login"
          onClick={() => navigate(routes.login())}
        />
      )}
    </Box>
  )
}

export default Appbar
