import { SettingsType } from '../types/settings';

export enum AppRoutes {
    RECOMMENDATIONS = 'recommendations',
    SETTINGS = 'settings',
    LOGIN = 'login',
    REGISTER = 'register',
    SAVED_POSTS = 'saved_posts',
    POST_DETAILS = 'post_details',
    CHAT = 'chat',
    ARCHIVES = 'archives',
    CREATE_POST = 'create_post',
    SEARCH = 'search',
    MESSAGES = 'messages',
    HOME = 'home',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
}

export const getRouteHome = () => '/';
export const getRouteProfile = (nickname: string) => `/profile/${nickname}`;
export const getRouteMessages = () => '/messages';
export const getRouteSearch = () => '/search';
export const getRouteCreatePost = () => '/create';
export const getRouteArchives = () => '/archives';
export const getRouteChat = (id: string) => `/messages/${id}`;
export const getRoutePostDetails = (id: string) => `/posts/${id}`;
export const getRouteSavedPosts = () => '/saved_posts';
export const getRouteSettings = (type: SettingsType) => `/settings/${type}`;
export const getRouteLogin = () => '/auth/login';
export const getRouteRegister = () => '/auth/register';
export const getRouteRecommendations = () => '/recommendations';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteHome()]: AppRoutes.HOME,
    [getRouteProfile(':nickname')]: AppRoutes.PROFILE,
    [getRouteMessages()]: AppRoutes.MESSAGES,
    [getRouteSearch()]: AppRoutes.SEARCH,
    [getRouteCreatePost()]: AppRoutes.CREATE_POST,
    [getRouteArchives()]: AppRoutes.ARCHIVES,
    [getRouteChat(':id')]: AppRoutes.CHAT,
    [getRoutePostDetails(':id')]: AppRoutes.POST_DETAILS,
    [getRouteSavedPosts()]: AppRoutes.SAVED_POSTS,
    [getRouteSettings(':type')]: AppRoutes.SETTINGS,
    [getRouteLogin()]: AppRoutes.LOGIN,
    [getRouteRegister()]: AppRoutes.REGISTER,
    ':path': AppRoutes.NOT_FOUND,
};
