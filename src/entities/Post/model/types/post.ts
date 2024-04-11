import { FilePayload } from '@/features/File';

export interface Photo {
    id: string;
}

export interface Comment {
    id: string;
    text: string;
    createdAt: string;
    updatedAt: string;
}

export interface Owner {
    _id: string;
    nickname: string;
    icon: FilePayload;
}

export interface Post {
    _id: string;
    photos: Photo[];
    title: string;
    text: string;
    likes: string[];
    saved: boolean;
    owner: string;
    comments: Comment[];
    createdAt: string;
    updatedAt: string;
}
