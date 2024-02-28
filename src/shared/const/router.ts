export enum AppRoutes {
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
export const getRouteProfile = (username: string) => `/profile/${username}`;
export const getRouteMessages = () => '/messages';
export const getRouteSearch = () => '/search';
export const getRouteCreatePost = () => '/create';
export const getRouteArchives = () => '/archives';
export const getRouteChat = (id: string) => `/messages/${id}`;


export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteHome()]: AppRoutes.HOME,
    [getRouteProfile(':username')]: AppRoutes.PROFILE,
    [getRouteMessages()]: AppRoutes.MESSAGES,
    [getRouteSearch()]: AppRoutes.SEARCH,
    [getRouteCreatePost()]: AppRoutes.CREATE_POST,
    [getRouteArchives()]: AppRoutes.ARCHIVES,
    [getRouteChat(':id')]: AppRoutes.CHAT,
    '*': AppRoutes.NOT_FOUND,
};
