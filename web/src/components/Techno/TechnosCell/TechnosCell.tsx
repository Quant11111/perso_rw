import type { FindTechnos, FindTechnosVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Technos from 'src/components/Techno/Technos'

export const QUERY: TypedDocumentNode<FindTechnos, FindTechnosVariables> = gql`
  query FindTechnos {
    technos {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No technos yet. '}
      <Link to={routes.newTechno()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindTechnos>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  technos,
}: CellSuccessProps<FindTechnos, FindTechnosVariables>) => {
  return <Technos technos={technos} />
}
