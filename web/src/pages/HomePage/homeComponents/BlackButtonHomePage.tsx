import React from 'react'

import { Box } from '@mui/material'

import WhiteHighlightedTypo from 'src/typo/WhiteHighlightedTypo'

interface BlackButtonHomePageProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2'
  onClick?: () => void
  label: string
}

export const BlackButtonHomePage = ({
  variant = 'h6',
  onClick,
  label,
}: BlackButtonHomePageProps) => {
  return (
    <Box
      onClick={onClick}
      mt={4}
      mx={5}
      py={2}
      px={22}
      borderRadius={4}
      sx={{
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        border: '1px solid transparent',
        transition: 'all 0.5s',
        ':hover': {
          backgroundColor: 'black !important',
          border: '1px solid white',
        },
      }}
    >
      <WhiteHighlightedTypo variant={variant}>{label}</WhiteHighlightedTypo>
    </Box>
  )
}
