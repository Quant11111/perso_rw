import { useRef } from 'react'
import { useEffect } from 'react'

import HelpIcon from '@mui/icons-material/Help'
import { Box, Tooltip } from '@mui/material'
import { VariantType, useSnackbar } from 'notistack'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = async (data: Record<string, string>) => {
    if (data.password !== data.passwordConfirmation) {
      enqueueSnackbar('passwords do not match', {
        variant: 'error' as VariantType,
      })
      return
    }
    const response = await signUp({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      enqueueSnackbar(response.message, {
        variant: 'info' as VariantType,
      })
    } else if (response.error) {
      enqueueSnackbar(response.error, {
        variant: 'error' as VariantType,
      })
    } else {
      enqueueSnackbar('Account Created', {
        variant: 'success' as VariantType,
      })
    }
  }

  return (
    <Box>
      <Metadata title="Signup" />
      <main className="rw-main">
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <Tooltip
                placement="bottom-end"
                title="We do not ask for any personnal information such as your email or
              real name, and the password you shose is hashed before being
              stored in the database."
              >
                <Box gap={2} display={'flex'}>
                  <h2 className="rw-heading rw-heading-secondary">Signup</h2>
                  <HelpIcon />
                </Box>
              </Tooltip>
            </header>
            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Username
                  </Label>

                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />
                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <FieldError name="password" className="rw-field-error" />

                  <Label
                    name="passwordConfirmation"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password Confirmation
                  </Label>
                  <PasswordField
                    name="passwordConfirmation"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password confirmation is required',
                      },
                    }}
                  />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </Box>
  )
}

export default SignupPage
