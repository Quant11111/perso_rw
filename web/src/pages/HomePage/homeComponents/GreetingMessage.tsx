import { Box, Stack } from '@mui/material'

import WhiteHighlightedTypo from 'src/typo/WhiteHighlightedTypo'

export const GreetingMessage = () => {
  return (
    <Stack gap={5}>
      <Box>
        <WhiteHighlightedTypo variant={'h1'}>
          Welcome to SaaSmile
        </WhiteHighlightedTypo>
        <WhiteHighlightedTypo variant={'h3'}>
          The best place to find your next SaaS
        </WhiteHighlightedTypo>
      </Box>
      <Stack alignItems={'center'}>
        <Box
          mx={5}
          py={2}
          px={5}
          borderRadius={4}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
            ':hover': {
              backgroundColor: 'black !important',
              border: '1px solid white',
              transition: 'all 0.5s',
            },
          }}
        >
          <WhiteHighlightedTypo variant={'h4'}>
            You need a specific tool for your business? Increase your
            productivity with the best SaaS development experience
          </WhiteHighlightedTypo>
        </Box>
      </Stack>
    </Stack>
  )
}
