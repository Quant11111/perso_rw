import type {
  EditTechnoById,
  UpdateTechnoInput,
  UpdateTechnoMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TechnoForm from 'src/components/Techno/TechnoForm'

export const QUERY: TypedDocumentNode<EditTechnoById> = gql`
  query EditTechnoById($id: String!) {
    techno: techno(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`

const UPDATE_TECHNO_MUTATION: TypedDocumentNode<
  EditTechnoById,
  UpdateTechnoMutationVariables
> = gql`
  mutation UpdateTechnoMutation($id: String!, $input: UpdateTechnoInput!) {
    updateTechno(id: $id, input: $input) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ techno }: CellSuccessProps<EditTechnoById>) => {
  const [updateTechno, { loading, error }] = useMutation(
    UPDATE_TECHNO_MUTATION,
    {
      onCompleted: () => {
        toast.success('Techno updated')
        navigate(routes.technos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTechnoInput,
    id: EditTechnoById['techno']['id']
  ) => {
    updateTechno({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Techno {techno?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TechnoForm
          techno={techno}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
