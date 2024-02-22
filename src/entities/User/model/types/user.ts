export enum WhoCanViewEnum {
    ALL = 'all',
    FRIENDS = 'friends',
    NOBODY = 'nobody',
}

export interface Setting {
    isClosedAccount: boolean;
    whoCanViewPosts: WhoCanViewEnum;
    whoCanViewFriends: WhoCanViewEnum;
}

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    picturePath: string;
    friends: string[];
    location: string;
    occupation: string;
    viewedProfile: number;
    savedPosts: string[];
    impressions: number;
    confidentiality: Setting;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface UserPayload {
    token: string;
    user: User;
}
