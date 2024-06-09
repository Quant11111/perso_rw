import { Box, Stack } from '@mui/material'

import { Metadata } from '@redwoodjs/web'

import WhiteHighlightedTypo from 'src/typo/WhiteHighlightedTypo'

import { GreetingMessage } from './homeComponents/GreetingMessage'
import HomeAnimation from './homeComponents/HomeAnimation'
import { ScrollAnimButton } from './homeComponents/ScrollAnimButton'

const HomePage = () => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 100%)',
      }}
      position={'relative'}
      overflow={'scoll'}
    >
      <Metadata title="Home" description="Home page" />
      <HomeAnimation />

      <Stack
        sx={{
          '--scroll-behavior': 'smooth',
          scrollBehavior: 'smooth',
        }}
        pt={20}
        pb={5}
        gap={20}
        width={'100%'}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack>
          <GreetingMessage />
          <ScrollAnimButton href="#scroll" />
        </Stack>

        <Box
          mx={5}
          borderRadius={5}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <WhiteHighlightedTypo variant={'h4'}>
            You need a specific tool for your business? Increase your
            productivity with the best SaaS development experience
          </WhiteHighlightedTypo>
        </Box>
        <Box
          mx={5}
          borderRadius={5}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <WhiteHighlightedTypo variant={'h4'}>
            You need a specific tool for your business? Increase your
            productivity with the best SaaS development experience
          </WhiteHighlightedTypo>
        </Box>
        <Box
          mx={5}
          borderRadius={'0px'}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <WhiteHighlightedTypo variant={'h4'}>
            You need a specific tool for your business? Increase your
            productivity with the best SaaS development experience
          </WhiteHighlightedTypo>
        </Box>
        <Box
          id="scroll"
          mx={5}
          borderRadius={5}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <WhiteHighlightedTypo variant={'h4'}>
            You need a specific tool for your business? Increase your
            productivity with the best SaaS development experience
          </WhiteHighlightedTypo>
        </Box>
      </Stack>
    </Box>
  )
}

export default HomePage
