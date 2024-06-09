import { Box, CardMedia, Stack } from '@mui/material'

import { themeSaaSmile } from 'src/theme'
import WhiteHighlightedTypo from 'src/typo/WhiteHighlightedTypo'

interface HomeCardProps {
  children?: React.ReactNode
  video?: string
  img?: string
  title: string
  description: string
  revert?: boolean
}

export const HomeCard = ({
  children,
  img,
  video,
  title,
  description,
  revert = false,
}: HomeCardProps) => {
  revert = !revert
  return (
    <Stack
      ml={revert ? -1 : 10}
      mr={revert ? 5 : -1}
      borderRadius={2}
      direction={'row'}
      alignItems={'center'}
      textAlign={'center'}
      sx={{
        zIndex: 2,
        backgroundColor: themeSaaSmile.palette.darkWhite,
        overflow: 'hidden',
        opacity: 0.5,
        transition: 'ease-in-out 0.7s',
        boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.25)',
        ':hover': {
          backgroundColor: themeSaaSmile.palette.white,
          opacity: 1,
        },
      }}
    >
      {revert && <HomeCardContent title={title} description={description} />}
      {video !== undefined && <HomeCardVideo video={video} />}
      {img !== undefined && <HomeCardImage img={img} />}
      {children !== undefined && <Box sx={{ width: 1, height: 1 }} />}
      {children !== undefined && children}
      {!revert && <HomeCardContent title={title} description={description} />}
    </Stack>
  )
}

const HomeCardContent = ({ title, description }) => {
  return (
    <Stack my={5} p={3} alignItems={'center'} borderRadius={2}>
      <WhiteHighlightedTypo color={'black'} variant={'h4'}>
        {title}
      </WhiteHighlightedTypo>
      <Box
        sx={{
          my: 2,
          border: '1px solid black',
          width: '100%',
        }}
      />
      <WhiteHighlightedTypo color={'black'} variant={'h6'}>
        {description}
      </WhiteHighlightedTypo>
    </Stack>
  )
}

const HomeCardImage = ({ img }) => {
  return (
    <Box p={5}>
      <CardMedia
        component="img"
        sx={{ borderRadius: 2, width: 400 }}
        image={img}
        alt="img not found"
      />
    </Box>
  )
}

const HomeCardVideo = ({ video }) => {
  return (
    <Box p={3}>
      <iframe
        width="400px"
        height="250px"
        src={video}
        title="Close to you"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: '8px', border: '1px solid white' }}
      />
    </Box>
  )
}
