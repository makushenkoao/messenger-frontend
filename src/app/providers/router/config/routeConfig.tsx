import { RouteProps } from 'react-router-dom';
import {
    AppRoutes,
    getRouteHome,
    getRouteProfile,
    getRouteMessages,
    getRouteSearch,
} from '@/shared/const/router';
import { HomePage } from '@/pages/HomePage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SearchPage } from '@/pages/SearchPage';
import { MessagesPage } from '@/pages/MessagesPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: getRouteHome(),
        element: <HomePage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':username'),
        element: <ProfilePage />,
    },
    [AppRoutes.SEARCH]: {
        path: getRouteSearch(),
        element: <SearchPage />,
    },
    [AppRoutes.MESSAGES]: {
        path: getRouteMessages(),
        element: <MessagesPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
