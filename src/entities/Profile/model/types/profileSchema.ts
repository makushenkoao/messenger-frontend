import { Profile } from './profile';

export interface ProfileSchema {
    data?: Profile;
    loading?: boolean;
    error?: string;
}
