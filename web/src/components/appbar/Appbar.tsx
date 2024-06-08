import React from 'react'

import { Box, Button } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'

const Appbar: React.FC = () => {
  const handleAlert = () => {
    alert('Hello world!')
  }

  return (
    <Box
      className="appbar"
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '64px',
        background: 'darkBlue',
      }}
    >
      <Link to={routes.home()}>Accueil</Link>
      <Link to={routes.home()}>À propos</Link>
      <Link to={routes.home()}>Contact</Link>
      <Button variant="contained" onClick={handleAlert} color="primary">
        alert
      </Button>
    </Box>
  )
}

export default Appbar
