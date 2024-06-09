import { Box, IconButton } from '@mui/material'

interface ScrollAnimButtonProps {
  onClick?: () => void
}

export const ScrollAnimButton = ({ onClick }: ScrollAnimButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      className="mouseContainer"
      sx={{
        width: '32px',
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '100px',
      }}
    >
      <Box
        className="mouse"
        sx={{
          border: '3px solid white',
          width: '18px',
          backgroundColor: 'transparent',
          height: '35px',
          borderRadius: '10px',
          ':hover': {
            backgroundColor: 'white',
          },
        }}
      >
        <Box className="wheel"></Box>
      </Box>
    </IconButton>
  )
}
