import { Box, Stack } from '@mui/material'

import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { themeSaaSmile } from 'src/theme'

import { GreetingMessage } from './homeComponents/GreetingMessage'
import { Handshake } from './homeComponents/Handshake'
import HomeAnimation from './homeComponents/HomeAnimation'
import { HomeCard } from './homeComponents/HomeCard'
import { ScrollAnimButton } from './homeComponents/ScrollAnimButton'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  const handleScroll = () => {
    console.log('scrolling')
    document.getElementById('mainStack').scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }
  const closeToYouLabel: string = isAuthenticated
    ? 'Ask for a quote'
    : 'Connect and ask for a quote'

  const routeProfile = (_isAuthenticated: boolean) => {
    _isAuthenticated ? navigate(routes.profile()) : navigate(routes.login())
  }
  return (
    <Box
      sx={{
        background: themeSaaSmile.gradiant.homePage,
      }}
      position={'relative'}
    >
      <Metadata title="Home" description="Home page" />
      <HomeAnimation />

      <Stack
        id="mainStack"
        pt={20}
        pb={5}
        gap={20}
        width={'100%'}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack>
          <GreetingMessage />
          <ScrollAnimButton onClick={handleScroll} />
        </Stack>

        <HomeCard
          buttonLabel={closeToYouLabel}
          onClick={() => routeProfile(isAuthenticated)}
          video="https://www.youtube.com/embed/iFx-5PGLgb4"
          title="Close to you"
          description="We like to keep our
          client informed about the developement process
           on a daily basis. We feel as a small company
           that showing the latest advancements to our
           client is the best way to ensure the tool creation keeps moving in the right direction. "
        />
        <HomeCard
          buttonLabel="Learn more about us"
          onClick={() => navigate(routes.aboutUs())}
          revert={true}
          img="https://i.imgflip.com/qof22.jpg?a477120"
          title="Close to each others as a team"
          description="As a small team of trustwothy software engineers, we can avoid
           the common pitfalls of larger companies. We are able share information easier. The wole crew has a deep endurstanding
           of the technologies and the solutions we are working on. You can already call us the dream team."
        />

        <HomeCard
          buttonLabel="Learn about the tech we use"
          onClick={() => navigate(routes.techStack())}
          title="Frictionless handover"
          description="When the project you ordered is up and running, we
          will make sure that your staff or yourself if the tool is for personal use, will be able to use it and
          customize it to your needs. We like to have news from our former clients in order to gather feedback, improve our
          services and make sure some unnotices bugs wont stay unfixed."
        >
          <Handshake />
        </HomeCard>
        <HomeCard
          buttonLabel="Browse our products"
          onClick={() => navigate(routes.products())}
          revert={true}
          img="https://i.pinimg.com/originals/cd/59/d6/cd59d626dc86397fe45080e6e9c7027d.gif"
          title="We might already have what you need"
          description="Checkout out product page to see if we already have the tool you are looking for. When we create a tool for a client, we always transform
          it into a SaaS. This way we can offer it to other clients and make it evolve with the feedback we gather. "
        />
      </Stack>
    </Box>
  )
}

export default HomePage
