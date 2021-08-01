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
            { userName },
            { dataSources }: { dataSources: DataSources }
        ) =>
            dataSources.profileAPI.findOrCreateProfile({
                userName
            })
    }
};
