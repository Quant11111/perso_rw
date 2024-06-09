export const schema = gql`
  type Techno {
    id: String!
    name: String!
    description: String!
    image: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    technos: [Techno!]! @requireAuth
    techno(id: String!): Techno @requireAuth
  }

  input CreateTechnoInput {
    name: String!
    description: String!
    image: String!
  }

  input UpdateTechnoInput {
    name: String
    description: String
    image: String
  }

  type Mutation {
    createTechno(input: CreateTechnoInput!): Techno! @requireAuth
    updateTechno(id: String!, input: UpdateTechnoInput!): Techno! @requireAuth
    deleteTechno(id: String!): Techno! @requireAuth
  }
`
