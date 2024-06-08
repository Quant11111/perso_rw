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
      {!isAuthenticated && (
        <>
          <AppbarButton
            label="Login"
            onClick={() => navigate(routes.login())}
          />

          <AppbarButton
            label="Signup"
            onClick={() => navigate(routes.signup())}
          />
        </>
      )}
      {isAuthenticated && (
        <AppbarButton
          label="Profile"
          onClick={() => navigate(routes.profile())}
        />
      )}
      {currentUser?.role === 'ADMIN' && (
        <AppbarButton label="Admin" onClick={() => navigate(routes.admin())} />
      )}
      <AppbarButton label="SaaSmile" onClick={() => navigate(routes.home())} />

      <AppbarButton label="TechStack" onClick={() => navigate(routes.home())} />

      <AppbarButton
        label="Contact us"
        onClick={() => navigate(routes.home())}
      />
      {isAuthenticated && (
        <AppbarButton label="Logout" onClick={() => logOut()} />
      )}
    </Box>
  )
}

export default Appbar
