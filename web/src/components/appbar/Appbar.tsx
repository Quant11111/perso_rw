import React from 'react'

import { Box } from '@mui/material'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import AppbarButton from './AppbarButton'

const Appbar: React.FC = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <Box
      className="appbar"
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '64px',
        background: 'white',
      }}
    >
      {isAuthenticated && (
        <AppbarButton
          isActive={routes.profile() === location.pathname}
          label="Profile"
          onClick={() => navigate(routes.profile())}
        />
      )}
      {currentUser?.role === 'ADMIN' && (
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
      {isAuthenticated && (
        <AppbarButton label="Logout" onClick={() => logOut()} />
      )}
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
