import { gql } from "@apollo/client";

const CREATE_MESSAGE = gql`
  mutation CreateMessage(
    $name: String!
    $email: String!
    $phone: String!
    $message: String!
  ) {
    createMessage(
      data: {
        name: $name
        email: $email
        phone: $phone
        message: $message
        readed: false
      }
    ) {
      id
    }
  }
`;

const PUBLISH_MESSAGE = gql`
  mutation PublishMessage($id: ID!) {
    publishMessage(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;

const FIND_MESSAGES = gql`
  query FindMessages {
    messages(orderBy: createdAt_DESC) {
      id
      name
      email
      phone
      message
      readed
      createdAt
    }
  }
`;

const SET_READED = gql`
  mutation UpdateReaded($id: ID!) {
    updateMessage(where: { id: $id }, data: { readed: true }) {
      id
    }
  }
`;

export { CREATE_MESSAGE, PUBLISH_MESSAGE, FIND_MESSAGES, SET_READED };
