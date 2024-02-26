import { RouteProps } from 'react-router-dom';
import {
    AppRoutes,
    getRouteHome,
    getRouteProfile,
    getRouteMessages,
    getRouteSearch,
    getRouteCreatePost,
    getRouteNotifications,
} from '@/shared/const/router';
import { HomePage } from '@/pages/HomePage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SearchPage } from '@/pages/SearchPage';
import { MessagesPage } from '@/pages/MessagesPage';
import { NotificationsPage } from '@/pages/NotificationsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { CreatePostPage } from '@/pages/CreatePostPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.CREATE_POST]: {
        path: getRouteCreatePost(),
        element: <CreatePostPage />,
    },
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
    [AppRoutes.NOTIFICATIONS]: {
        path: getRouteNotifications(),
        element: <NotificationsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
