import type {
  DeleteTechnoMutation,
  DeleteTechnoMutationVariables,
  FindTechnos,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Techno/TechnosCell'
import { timeTag, truncate } from 'src/lib/formatters'

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

const TechnosList = ({ technos }: FindTechnos) => {
  const [deleteTechno] = useMutation(DELETE_TECHNO_MUTATION, {
    onCompleted: () => {
      toast.success('Techno deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteTechnoMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete techno ' + id + '?')) {
      deleteTechno({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {technos.map((techno) => (
            <tr key={techno.id}>
              <td>{truncate(techno.id)}</td>
              <td>{truncate(techno.name)}</td>
              <td>{truncate(techno.description)}</td>
              <td>{truncate(techno.image)}</td>
              <td>{timeTag(techno.createdAt)}</td>
              <td>{timeTag(techno.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.techno({ id: techno.id })}
                    title={'Show techno ' + techno.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTechno({ id: techno.id })}
                    title={'Edit techno ' + techno.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete techno ' + techno.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(techno.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TechnosList
