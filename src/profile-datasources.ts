import { PrismaClient } from '@prisma/client';
import { DataSource } from 'apollo-datasource';

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

    async findOrCreateProfile({ userName }) {
        const profiles = await this.prisma.profile.create({
            data: { userName }
        });
        return profiles;
    }
}