import { User } from '@/entities/User';

export interface LoginPayload {
    accessToken: string;
    user: User;
}

export interface LoginData {
    email: string;
    password: string;
}

export type LoginFields = keyof LoginData;

export interface RegisterData {
    nickname: string;
    email: string;
    password: string;
    avatar: File;
}
