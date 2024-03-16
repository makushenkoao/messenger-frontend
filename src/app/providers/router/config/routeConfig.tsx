import { RouteProps } from 'react-router-dom';

import { ArchivesPage } from '@/pages/ArchivesPage';
import { ChatPage } from '@/pages/ChatPage';
import { CreatePostPage } from '@/pages/CreatePostPage';
import { HomePage } from '@/pages/HomePage';
import { MessagesPage } from '@/pages/MessagesPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PostDetailsPage } from '@/pages/PostDetailsPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SavedPostsPage } from '@/pages/SavedPostsPage';
import { SearchPage } from '@/pages/SearchPage';
import { SettingsPage } from '@/pages/SettingsPage';
import {
    AppRoutes,
    getRouteArchives,
    getRouteChat,
    getRouteCreatePost,
    getRouteHome,
    getRouteMessages,
    getRoutePostDetails,
    getRouteProfile,
    getRouteSavedPosts,
    getRouteSearch,
    getRouteSettings,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingsPage />,
    },
    [AppRoutes.SAVED_POSTS]: {
        path: getRouteSavedPosts(),
        element: <SavedPostsPage />,
    },
    [AppRoutes.POST_DETAILS]: {
        path: getRoutePostDetails(':id'),
        element: <PostDetailsPage />,
    },
    [AppRoutes.CHAT]: {
        path: getRouteChat(':id'),
        element: <ChatPage />,
    },
    [AppRoutes.ARCHIVES]: {
        path: getRouteArchives(),
        element: <ArchivesPage />,
    },
    [AppRoutes.HOME]: {
        path: getRouteHome(),
        element: <HomePage />,
    },
    [AppRoutes.CREATE_POST]: {
        path: getRouteCreatePost(),
        element: <CreatePostPage />,
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
