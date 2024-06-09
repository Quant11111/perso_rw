import type {
  DeleteTechnoMutation,
  DeleteTechnoMutationVariables,
  FindTechnoById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_TECHNO_MUTATION: TypedDocumentNode<
  DeleteTechnoMutation,
  DeleteTechnoMutationVariables
> = gql`
  mutation DeleteTechnoMutation($id: String!) {
    deleteTechno(id: $id) {
      id
    }
  }
`

interface Props {
  techno: NonNullable<FindTechnoById['techno']>
}

const Techno = ({ techno }: Props) => {
  const [deleteTechno] = useMutation(DELETE_TECHNO_MUTATION, {
    onCompleted: () => {
      toast.success('Techno deleted')
      navigate(routes.technos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTechnoMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete techno ' + id + '?')) {
      deleteTechno({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Techno {techno.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{techno.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{techno.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{techno.description}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>{techno.image}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(techno.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(techno.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTechno({ id: techno.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(techno.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Techno
