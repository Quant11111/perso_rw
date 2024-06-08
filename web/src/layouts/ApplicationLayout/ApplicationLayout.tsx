import { Box, Stack } from '@mui/material'

import Appbar from 'src/components/appbar/Appbar'

type ApplicationLayoutProps = {
  children?: React.ReactNode
}

const ApplicationLayout = ({ children }: ApplicationLayoutProps) => {
  return (
    <Stack
      sx={{
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <Appbar />

      <Box
        my={3}
        mx={3}
        sx={{
          position: 'relative',
          height: 'calc(100vh - 64px - 16px)', // Remplacez tailleDeLaAppbar par la hauteur réelle de votre appbar et ajustez 16px selon my={2}
          background: 'white',
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        {children}
      </Box>
    </Stack>
  )
}

export default ApplicationLayout
