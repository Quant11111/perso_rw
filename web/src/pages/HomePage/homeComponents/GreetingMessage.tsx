import { Box, Stack } from '@mui/material'

import { themeSaaSmile } from 'src/theme'
import WhiteHighlightedTypo from 'src/typo/WhiteHighlightedTypo'

export const GreetingMessage = () => {
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
            borderRadius={10}
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
      <Stack alignItems={'center'}>
        <Box
          mx={5}
          py={2}
          px={22}
          borderRadius={4}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
            border: '1px solid transparent',
            transition: 'all 0.5s',
            ':hover': {
              backgroundColor: 'black !important',
              border: '1px solid white',
            },
          }}
        >
          <WhiteHighlightedTypo variant={'h4'}>
            Describe to our team the specific tool you are looking for !
          </WhiteHighlightedTypo>
        </Box>
      </Stack>
    </Stack>
  )
}
