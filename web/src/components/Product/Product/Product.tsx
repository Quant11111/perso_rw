import type {
  DeleteProductMutation,
  DeleteProductMutationVariables,
  FindProductById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_PRODUCT_MUTATION: TypedDocumentNode<
  DeleteProductMutation,
  DeleteProductMutationVariables
> = gql`
  mutation DeleteProductMutation($id: String!) {
    deleteProduct(id: $id) {
      id
    }
  }
`

interface Props {
  product: NonNullable<FindProductById['product']>
}

const Product = ({ product }: Props) => {
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    onCompleted: () => {
      toast.success('Product deleted')
      navigate(routes.products())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteProductMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete product ' + id + '?')) {
      deleteProduct({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Product {product.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{product.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{product.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{product.description}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{product.price}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>{product.image}</td>
            </tr>
            <tr>
              <th>Delivery delay</th>
              <td>{product.deliveryDelay}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(product.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(product.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProduct({ id: product.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(product.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Product
