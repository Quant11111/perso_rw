import type { FindProductById, FindProductByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Product from 'src/components/Product/Product'

export const QUERY: TypedDocumentNode<
  FindProductById,
  FindProductByIdVariables
> = gql`
  query FindProductById($id: String!) {
    product: product(id: $id) {
      id
      name
      description
      price
      image
      deliveryDelay
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Product not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindProductByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  product,
}: CellSuccessProps<FindProductById, FindProductByIdVariables>) => {
  return <Product product={product} />
}
