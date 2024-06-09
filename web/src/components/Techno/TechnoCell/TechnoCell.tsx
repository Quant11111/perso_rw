import type { FindTechnoById, FindTechnoByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Techno from 'src/components/Techno/Techno'

export const QUERY: TypedDocumentNode<
  FindTechnoById,
  FindTechnoByIdVariables
> = gql`
  query FindTechnoById($id: String!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Techno not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTechnoByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  techno,
}: CellSuccessProps<FindTechnoById, FindTechnoByIdVariables>) => {
  return <Techno techno={techno} />
}
