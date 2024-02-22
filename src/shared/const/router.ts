export enum AppRoutes {
    HOME = 'home',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
}

export const getRouteHome = () => '/';
export const getRouteProfile = (username: string) => `/profile/${username}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteHome()]: AppRoutes.HOME,
};
