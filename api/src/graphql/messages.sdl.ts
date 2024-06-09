export const schema = gql`
  type Message {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    content: String!
    user: User!
    userId: String!
    type: MessageType!
    deletedAt: DateTime
  }

  enum MessageType {
    SENT
    RECEIVED
  }

  type Query {
    messages: [Message!]! @requireAuth
    message(id: String!): Message @requireAuth
  }

  input CreateMessageInput {
    content: String!
    userId: String!
    type: MessageType!
    deletedAt: DateTime
  }

  input UpdateMessageInput {
    content: String
    userId: String
    type: MessageType
    deletedAt: DateTime
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message! @requireAuth
    updateMessage(id: String!, input: UpdateMessageInput!): Message!
      @requireAuth
    deleteMessage(id: String!): Message! @requireAuth
  }
`
