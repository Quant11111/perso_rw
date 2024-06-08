import type {
  EditProductById,
  UpdateProductInput,
  UpdateProductMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProductForm from 'src/components/Product/ProductForm'

export const QUERY: TypedDocumentNode<EditProductById> = gql`
  query EditProductById($id: String!) {
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

const UPDATE_PRODUCT_MUTATION: TypedDocumentNode<
  EditProductById,
  UpdateProductMutationVariables
> = gql`
  mutation UpdateProductMutation($id: String!, $input: UpdateProductInput!) {
    updateProduct(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ product }: CellSuccessProps<EditProductById>) => {
  const [updateProduct, { loading, error }] = useMutation(
    UPDATE_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Product updated')
        navigate(routes.products())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateProductInput,
    id: EditProductById['product']['id']
  ) => {
    updateProduct({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Product {product?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductForm
          product={product}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
