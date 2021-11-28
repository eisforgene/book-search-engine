const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        bookId: String
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String], description: String, bookId: String, image: String, link: String, title: String): User
        removeBook(_id: ID!): User
    }
    input savedBook {
        bookId: String!
        authors: [String]
        description: String
        image: String
        title: String
        link: String
    }
`;

module.exports = typeDefs;