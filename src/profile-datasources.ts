import { PrismaClient } from '@prisma/client';
import { DataSource } from 'apollo-datasource';
import { Profile } from './models';

export class ProfileAPI extends DataSource {
    prisma: PrismaClient;
    context: any;

    constructor({ prisma }: any) {
        super();
        this.prisma = prisma;
    }

    /**
     * This is a function that gets called by ApolloServer when being setup.
     * This function gets called with the datasource config including things
     * like caches and context. We'll assign this.context to the request context
     * here, so we can know about the user making requests
     */
    initialize(config: any) {
        this.context = config.context;
    }

    async findAllProfiles() {
        const profiles = await this.prisma.profile.findMany({});
        return profiles;
    }

    async createProfile(input: Profile) {
        const profiles = await this.prisma.profile.create({
            data: {
                userName: input.userName,
                firstName: input.firstName,
                lastName: input.lastName,
                bio: input.bio,
                links: input.links,
                location: input.location
            }
        });
        return profiles;
    }

    async updateProfile(userName: string, input: Omit<Profile, 'userName'>) {
        const data = {};
        if (userName) {
            if (input.firstName) data['firstName'] = input.firstName;
            if (input.lastName) data['lastName'] = input.lastName;
            if (input.bio) data['bio'] = input.bio;
            if (input.links) data['links'] = input.links;
            if (input.location) data['location'] = input.location;

            const profile = await this.prisma.profile.update({
                where: {
                    userName: userName
                },
                data
            });
            return profile;
        }
    }
}
