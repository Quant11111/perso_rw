// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, PrivateSet, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import ApplicationLayout from './layouts/ApplicationLayout/ApplicationLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Products" titleTo="products" buttonLabel="New Product" buttonTo="newProduct">
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Messages" titleTo="messages" buttonLabel="New Message" buttonTo="newMessage">
        <Route path="/messages/new" page={MessageNewMessagePage} name="newMessage" />
        <Route path="/messages/{id}/edit" page={MessageEditMessagePage} name="editMessage" />
        <Route path="/messages/{id}" page={MessageMessagePage} name="message" />
        <Route path="/messages" page={MessageMessagesPage} name="messages" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
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
