export enum AppRoutes {
    CREATE_POST = 'create_post',
    SEARCH = 'search',
    MESSAGES = 'messages',
    HOME = 'home',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
}

export const getRouteHome = () => '/';
export const getRouteProfile = (username: string) => `/profile/${username}`;
export const getRouteMessages = () => '/messages';
export const getRouteSearch = () => '/search';
export const getRouteCreatePost = () => '/create';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteHome()]: AppRoutes.HOME,
    [getRouteProfile(':username')]: AppRoutes.PROFILE,
    [getRouteMessages()]: AppRoutes.MESSAGES,
    [getRouteSearch()]: AppRoutes.SEARCH,
    [getRouteCreatePost()]: AppRoutes.CREATE_POST,
    '*': AppRoutes.NOT_FOUND,
};
