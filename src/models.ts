import { ProfileAPI } from './profile-datasources';

export type Profile = {
    userName: string;
    firstName?: string;
    lastName?: string;
    location?: string;
    bio?: string;
    links?: string[];
};

export interface DataSources {
    profileAPI: ProfileAPI;
}
