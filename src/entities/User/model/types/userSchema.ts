import { User } from './user';

export interface UserSchema {
    data?: User;
    _mounted: boolean;
    isLoading?: boolean;
    error?: string;
}
