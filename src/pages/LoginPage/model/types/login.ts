export interface LoginData {
    email: string;
    password: string;
}

export type LoginFields = keyof LoginData;
