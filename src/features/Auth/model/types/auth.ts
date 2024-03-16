export type AuthType = 'register' | 'login';

export interface RegisterData {
    nickname: string;
    email: string;
    password: string;
    avatar: File;
}

export interface ResetPasswordData {}

export interface LoginData {
    email: string;
    password: string;
}

export type LoginFields = keyof LoginData;
