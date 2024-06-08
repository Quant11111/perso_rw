import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const ProfilePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <Metadata title="Profile" description="Profile page" />

      <h1>ProfilePage</h1>
      <p>{JSON.stringify(currentUser, null, 2)}</p>
      <p>
        My default route is named <code>profile</code>, link to me with `
        <Link to={routes.profile()}>Profile</Link>`
      </p>
    </>
  )
}

export default ProfilePage
