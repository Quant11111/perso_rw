import { Box, Stack } from '@mui/material'

type ApplicationLayoutProps = {
  children?: React.ReactNode
}

const ApplicationLayout = ({ children }: ApplicationLayoutProps) => {
  return (
    <Stack sx={{ boxSizing: 'border-box' }}>
      <Box
        sx={{
          position: 'relative',
          height: 'calc(100vh - 64px)', // 64px is the height of the AppBar
          width: '100%',
          background:
            'linear-gradient(90deg, skyblue 25%, white 50%, skyblue 75%)',
          backgroundSize: '200% 100%',
          animation: 'wave 10s infinite linear',
          '@keyframes wave': {
            '0%': {
              backgroundPosition: '200% 0',
            },
            '100%': {
              backgroundPosition: '-200% 0',
            },
          },
        }}
      >
        {children}
      </Box>
    </Stack>
  )
}

export default ApplicationLayout
