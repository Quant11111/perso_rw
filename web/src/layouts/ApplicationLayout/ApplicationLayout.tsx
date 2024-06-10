import { Box, Stack } from '@mui/material'

import Appbar from 'src/components/appbar/Appbar'
import { themeSaaSmile } from 'src/theme'

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
          width: 'calc(100% - 48px)',
          height: '100%',
          borderRadius: 2,
          boxShadow: themeSaaSmile.shadows.strong,
          overflow: 'scroll',
          scrollbarWidth: 'none',
        }}
      >
        {children}
      </Box>
    </Stack>
  )
}

export default ApplicationLayout
