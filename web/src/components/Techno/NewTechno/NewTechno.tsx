import type {
  CreateTechnoMutation,
  CreateTechnoInput,
  CreateTechnoMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TechnoForm from 'src/components/Techno/TechnoForm'

const CREATE_TECHNO_MUTATION: TypedDocumentNode<
  CreateTechnoMutation,
  CreateTechnoMutationVariables
> = gql`
  mutation CreateTechnoMutation($input: CreateTechnoInput!) {
    createTechno(input: $input) {
      id
    }
  }
`

const NewTechno = () => {
  const [createTechno, { loading, error }] = useMutation(
    CREATE_TECHNO_MUTATION,
    {
      onCompleted: () => {
        toast.success('Techno created')
        navigate(routes.technos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTechnoInput) => {
    createTechno({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Techno</h2>
      </header>
      <div className="rw-segment-main">
        <TechnoForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTechno
