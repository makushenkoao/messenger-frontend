export interface User {
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

export interface LoginPayload {
    accessToken: string;
    user: User;
}
