import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Profile {
        userName: String!
        firstName: String
        lastName: String
        location: String
        bio: String
        links: [String!]
        # image:
    }

    input ProfileCreateInput {
        userName: String!
        firstName: String!
        lastName: String!
        location: String
        bio: String
        links: [String!]
    }

    input ProfileUpdateInput {
        firstName: String
        lastName: String
        location: String
        bio: String
        links: [String!]
    }

    type Query {
        profiles: [Profile!]
    }

    type Mutation {
        addProfile(input: ProfileCreateInput!): Profile!
        updateProfile(userName: String, input: ProfileUpdateInput!): Profile
        removeProfile(userName: String!): Profile
    }
`;
