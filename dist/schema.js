import { gql } from 'apollo-server';
export const typeDefs = gql `
    type Book {
        title: String
        author: String
    }

    type Author {
        name: String
        books: [Book]
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        books: [Book]
    }
`;
//# sourceMappingURL=schema.js.map