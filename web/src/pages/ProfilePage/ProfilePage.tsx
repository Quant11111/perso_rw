import { Stack } from '@mui/material'

import { useAuth } from 'src/auth'
import { themeSaaSmile } from 'src/theme'

import { ProfileHeader } from './topSection/ProfileHeader'

const ProfilePage = () => {
  const { currentUser, logOut } = useAuth()

  return (
    <Stack
      p={2}
      position={'relative'}
      width={'100%'}
      height={'100%'}
      sx={{
        background: themeSaaSmile.gradiant.homePage,
        boxShadow: themeSaaSmile.shadows.large,
      }}
    >
      <ProfileHeader
        img={
          currentUser?.avatar ||
          'https://cdn.dribbble.com/users/369497/screenshots/11457867/media/4c2267939a9bfb728c5f55dfec37aa4e.jpg?resize=400x0'
        }
        name={currentUser?.name}
        roles={currentUser?.roles}
        logOut={() => logOut()}
      />
      <Stack
        mt={2}
        p={2}
        gap={2}
        flexGrow={1}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          background: themeSaaSmile.palette.darkWhite,
          borderRadius: themeSaaSmile.borderRadius,
        }}
      >
        {/*messages to display*/}
      </Stack>
      <Stack
        mt={2}
        p={2}
        height={50}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          background: themeSaaSmile.palette.darkWhite,
          borderRadius: 2,
        }}
      ></Stack>
    </Stack>
  )
}

export default ProfilePage
