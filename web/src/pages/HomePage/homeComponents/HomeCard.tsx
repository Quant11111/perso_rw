import { Box, Stack } from '@mui/material'

import WhiteHighlightedTypo from 'src/typo/WhiteHighlightedTypo'

interface HomeCardProps {
  img: string
  title: string
  description: string
}

export const HomeCard = ({ img, title, description }: HomeCardProps) => {
  return (
    <Stack direction={'row'}>
      <Box>
        <img src={img} alt={title} />
      </Box>
      <Box>
        <WhiteHighlightedTypo color={'black'} variant={'h4'}>
          {title}
        </WhiteHighlightedTypo>
        <WhiteHighlightedTypo color={'black'} variant={'h6'}>
          {description}
        </WhiteHighlightedTypo>
      </Box>
    </Stack>
  )
}
