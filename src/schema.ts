import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Profile {
        userName: String!
        firstName: String
        lastName: String
        location: String
        bio: String
        links: [String!]
    }

    input ProfileInput {
        userName: String!
        firstName: String!
        lastName: String!
        location: String
        bio: String
        links: [String!]
    }

    type Query {
        profiles: [Profile!]
    }

    type Mutation {
        # addProfile(input: ProfileInput!): Profile!
        addProfile(input: ProfileInput!): Profile!
    }
`;
