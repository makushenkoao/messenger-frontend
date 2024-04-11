import { FilePayload } from '@/features/File';

export interface User {
    icon: FilePayload;
    _id: string;
    email: string;
    avatar: string;
    nickname: string;
    following: string[];
    followers: string[];
    posts: string[];
    createdAt: string;
    updatedAt: string;
}
