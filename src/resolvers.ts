// Resolvers define the technique for fetching the types defined in the

import { DataSources } from './models';

// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
        profiles: async (
            _,
            __,
            { dataSources }: { dataSources: DataSources }
        ) => dataSources.profileAPI.findAllProfiles()
    },
    Mutation: {
        addProfile: async (
            _,
            { input },
            { dataSources }: { dataSources: DataSources }
        ) =>
            dataSources.profileAPI.findOrCreateProfile({
                userName: input.userName,
                firstName: input.firstName,
                lastName: input.lastName,
                bio: input.bio,
                links: input.links,
                location: input.location
            })
    }
};
