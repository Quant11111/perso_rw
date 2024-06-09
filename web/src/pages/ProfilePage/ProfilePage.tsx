import { Box } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import MessagesCell from 'src/components/Message/MessagesCell'

const ProfilePage = () => {
  const { currentUser } = useAuth()
  return (
    <Box position="relative" width={'97vw'}>
      <Metadata title="Profile" description="Profile page" />
      <h1>ProfilePage</h1>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      <MessagesCell />
      <p>
        My default route is named <code>profile</code>, link to me with `
        <Link to={routes.profile()}>Profile</Link>`
      </p>
    </Box>
  )
}

export default ProfilePage
