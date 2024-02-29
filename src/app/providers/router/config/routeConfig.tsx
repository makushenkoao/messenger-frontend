import { RouteProps } from 'react-router-dom';
import {
    AppRoutes,
    getRouteHome,
    getRouteProfile,
    getRouteMessages,
    getRouteSearch,
    getRouteCreatePost,
    getRouteArchives,
    getRoutePostDetails,
    getRouteChat,
    getRouteSavedPosts,
} from '@/shared/const/router';
import { HomePage } from '@/pages/HomePage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SearchPage } from '@/pages/SearchPage';
import { MessagesPage } from '@/pages/MessagesPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { CreatePostPage } from '@/pages/CreatePostPage';
import { ArchivesPage } from '@/pages/ArchivesPage';
import { ChatPage } from '@/pages/ChatPage';
import { PostDetailsPage } from '@/pages/PostDetailsPage';
import { SavedPostsPage } from '@/pages/SavedPostsPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
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
