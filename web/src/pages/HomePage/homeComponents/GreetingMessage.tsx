import { Box, Stack } from '@mui/material'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { themeSaaSmile } from 'src/theme'
import WhiteHighlightedTypo from 'src/typo/WhiteHighlightedTypo'

import { BlackButtonHomePage } from './BlackButtonHomePage'

export const GreetingMessage = () => {
  const { isAuthenticated } = useAuth()
  const onClick = () => {
    isAuthenticated ? navigate(routes.profile()) : navigate(routes.login())
  }
  return (
    <Stack gap={5}>
      <Stack gap={2}>
        <Box
          display={'flex'}
          alignItems={'space-around'}
          justifyContent={'center'}
        >
          <Box px={2}>
            <WhiteHighlightedTypo variant={'h1'}>
              Welcome to
            </WhiteHighlightedTypo>
          </Box>
          <Box
            px={2}
            borderRadius={themeSaaSmile.borderRadius}
            sx={{
              backgroundColor: themeSaaSmile.palette.blueAppbar,
              border: '1px solid white',
            }}
          >
            <WhiteHighlightedTypo variant={'h1'}>SaaSmile</WhiteHighlightedTypo>
          </Box>
        </Box>

        <WhiteHighlightedTypo variant={'h3'}>
          The best place to find your next SaaS
        </WhiteHighlightedTypo>
      </Stack>

      <BlackButtonHomePage
        variant={'h4'}
        label="Describe to our team the specific tool you are looking for !"
        onClick={onClick}
      />
    </Stack>
  )
}
