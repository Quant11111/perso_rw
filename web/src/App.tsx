import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import { AuthProvider, useAuth } from './auth'

import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <SnackbarProvider maxSnack={3}>
        <AuthProvider>
          <RedwoodApolloProvider useAuth={useAuth}>
            <CssBaseline />
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </SnackbarProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
