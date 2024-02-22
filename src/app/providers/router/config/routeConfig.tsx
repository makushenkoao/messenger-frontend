import { RouteProps } from 'react-router-dom';
import {
    AppRoutes,
    getRouteHome,
    getRouteProfile,
} from '@/shared/const/router';
import { HomePage } from '@/pages/HomePage';
import { ProfilePage } from '@/pages/ProfilePage';
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
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
