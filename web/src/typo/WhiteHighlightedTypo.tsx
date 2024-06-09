import { Typography } from '@mui/material'

interface WhiteHighlightedTypoProps {
  color?: string
  children: React.ReactNode
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const WhiteHighlightedTypo = ({
  color,
  children,
  variant,
}: WhiteHighlightedTypoProps) => {
  return (
    <Typography
      sx={{
        width: '100%',
        color: color || 'white',
        textShadow: '2px 2px 4px #000000',
        textAlign: 'center',
      }}
      variant={variant || 'h3'}
    >
      {children}
    </Typography>
  )
}

export default WhiteHighlightedTypo
