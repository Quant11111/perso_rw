import type { FindProducts, FindProductsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Products from 'src/components/Product/Products'

export const QUERY: TypedDocumentNode<
  FindProducts,
  FindProductsVariables
> = gql`
  query FindProducts {
    products {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No products yet. '}
      <Link to={routes.newProduct()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindProducts>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  products,
}: CellSuccessProps<FindProducts, FindProductsVariables>) => {
  return <Products products={products} />
}
