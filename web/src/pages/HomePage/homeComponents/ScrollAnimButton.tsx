import { Box } from '@mui/material'

interface ScrollAnimButtonProps {
  href?: string
}

export const ScrollAnimButton = ({ href }: ScrollAnimButtonProps) => {
  return (
    <a href={href || ''}>
      <Box
        className="mouseContainer"
        sx={{
          width: '24px',
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
      </Box>
    </a>
  )
}
