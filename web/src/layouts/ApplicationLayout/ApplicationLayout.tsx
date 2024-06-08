import { Box, Stack } from '@mui/material'

import Appbar from 'src/components/appbar/Appbar'

type ApplicationLayoutProps = {
  children?: React.ReactNode
}

const ApplicationLayout = ({ children }: ApplicationLayoutProps) => {
  return (
    <Stack sx={{ boxSizing: 'border-box' }}>
      <Appbar />
      <Box
        sx={{
          position: 'relative',
          height: 'calc(100vh - 64px)', // 64px is the height of the AppBar
          width: '100%',
          background: 'black',
        }}
      >
        <Box
          my={2}
          mx={2}
          sx={{
            width: 'fill-available',
            height: '100ù',
            background: 'white',
            borderRadius: 1,
            boxShadow: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Stack>
  )
}

export default ApplicationLayout
