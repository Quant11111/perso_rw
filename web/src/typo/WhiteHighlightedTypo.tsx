import { Typography } from '@mui/material'

interface WhiteHighlightedTypoProps {
  color?: string
  children: React.ReactNode
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2'
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
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
      }}
      variant={variant || 'h3'}
    >
      {children}
    </Typography>
  )
}

export default WhiteHighlightedTypo
