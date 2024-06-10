/* eslint-disable prettier/prettier */
import React from 'react'


import { Avatar, Box, Button, Stack, Typography } from '@mui/material'

import { themeSaaSmile } from 'src/theme'

interface ProfileHeaderProps {
  img?: string
  name: string
  roles: string[]
  logOut: () => void
}

export const ProfileHeader = ({ img, name, roles, logOut }: ProfileHeaderProps) => {
  return (
    <Box p={1} borderRadius={themeSaaSmile.borderRadius} display={'flex'} justifyContent={'space-between'} sx={{
      background: 'linear-gradient(180deg, #1A2980 0%, #26D0CE 100%)',
      border: `2px solid ${themeSaaSmile.palette.darkWhite}`,
    }}>
      <Box p={3} display={'flex'} alignItems={'center'}>
        <Avatar src={img} sx={{ width: 100, height: 100 }} />
        <Stack ml={3} color={'white'}>
          <Typography variant={'h4'}>{name}</Typography>
          <Typography variant={'h6'}>
            Role: {roles?.length > 0 ? roles.join(', ') : 'user'}
          </Typography>
        </Stack>
      </Box>
      <Stack justifyContent={'space-around'}>
      <Button onClick={()=>{}} variant='contained' sx={{
          backgroundColor: themeSaaSmile.palette.blueAppbar,
          padding: 1,
          marginX: 2,
          mt: 2,
          borderRadius: 4,
          border: `1px solid ${themeSaaSmile.palette.darkWhite}`,
          }}>
        Edit
        </Button>
        <Button onClick={logOut} variant='contained' sx={{
          backgroundColor: themeSaaSmile.palette.blueAppbar,
          paddingY: 1,
          marginX: 2,
          mb: 2,
          borderRadius: 4,
          border: `1px solid ${themeSaaSmile.palette.darkWhite}`,
          }}>
        Logout
        </Button>

    </Stack>
    </Box>
  )
}
