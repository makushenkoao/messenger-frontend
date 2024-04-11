import { ArchivesPage } from '@/pages/ArchivesPage';
import { ChatPage } from '@/pages/ChatPage';
import { CreatePostPage } from '@/pages/CreatePostPage';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { MessagesPage } from '@/pages/MessagesPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PostDetailsPage } from '@/pages/PostDetailsPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { RecommendationsPage } from '@/pages/RecommendationsPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { SavedPostsPage } from '@/pages/SavedPostsPage';
import { SearchPage } from '@/pages/SearchPage';
import { SettingsPage } from '@/pages/SettingsPage';
import {
    AppRoutes,
    getRouteArchives,
    getRouteChat,
    getRouteCreatePost,
    getRouteHome,
    getRouteLogin,
    getRouteMessages,
    getRoutePostDetails,
    getRouteProfile,
    getRouteRecommendations,
    getRouteRegister,
    getRouteSavedPosts,
    getRouteSearch,
    getRouteSettings,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.LOGIN]: {
        path: getRouteLogin(),
        element: <LoginPage />,
        authOnly: false,
    },
    [AppRoutes.REGISTER]: {
        path: getRouteRegister(),
        element: <RegisterPage />,
        authOnly: false,
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(':type'),
        element: <SettingsPage />,
        authOnly: true,
    },
    [AppRoutes.SAVED_POSTS]: {
        path: getRouteSavedPosts(),
        element: <SavedPostsPage />,
        authOnly: true,
    },
    [AppRoutes.POST_DETAILS]: {
        path: getRoutePostDetails(':id'),
        element: <PostDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.CHAT]: {
        path: getRouteChat(':id'),
        element: <ChatPage />,
        authOnly: true,
    },
    [AppRoutes.ARCHIVES]: {
        path: getRouteArchives(),
        element: <ArchivesPage />,
        authOnly: true,
    },
    [AppRoutes.HOME]: {
        path: getRouteHome(),
        element: <HomePage />,
        authOnly: true,
    },
    [AppRoutes.CREATE_POST]: {
        path: getRouteCreatePost(),
        element: <CreatePostPage />,
        authOnly: true,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':nickname'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.SEARCH]: {
        path: getRouteSearch(),
        element: <SearchPage />,
        authOnly: true,
    },
    [AppRoutes.MESSAGES]: {
        path: getRouteMessages(),
        element: <MessagesPage />,
        authOnly: true,
    },
    [AppRoutes.RECOMMENDATIONS]: {
        path: getRouteRecommendations(),
        element: <RecommendationsPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
        authOnly: true,
    },
};
