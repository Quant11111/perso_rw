import type { FindMessageById, FindMessageByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Message from 'src/components/Message/Message'

export const QUERY: TypedDocumentNode<
  FindMessageById,
  FindMessageByIdVariables
> = gql`
  query FindMessageById($id: String!) {
    message: message(id: $id) {
      id
      createdAt
      updatedAt
      content
      userId
      type
      deletedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Message not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindMessageByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  message,
}: CellSuccessProps<FindMessageById, FindMessageByIdVariables>) => {
  return <Message message={message} />
}
