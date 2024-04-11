import { FilePayload } from '@/features/File';

export interface Profile {
    _id: string;
    icon: FilePayload;
    email: string;
    avatar: string;
    nickname: string;
    following: string[];
    followers: string[];
    posts: string[];
    createdAt: string;
    updatedAt: string;
}
