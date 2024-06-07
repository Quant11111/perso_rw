// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, PrivateSet, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import ApplicationLayout from './layouts/ApplicationLayout/ApplicationLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ApplicationLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/techStack" page={TechStackPage} name="teckStack" />
        <Route path="/signup" page={SignupPage} name="signup" />

        <PrivateSet unauthenticated="login">
          <Route path="/profile" page={ProfilePage} name="profile" />
          <Route path="/chat" page={ChatPage} name="chat" />
        </PrivateSet>
        <PrivateSet unauthenticated="forbidden" roles="ADMIN">
          <Route path="/admin" page={AdminPage} name="admin" />
        </PrivateSet>
        <Route notfound page={NotFoundPage} />
        <Route path="/forbidden" page={ForbiddenPage} name="forbidden" />
      </Set>
    </Router>
  )
}

export default Routes
