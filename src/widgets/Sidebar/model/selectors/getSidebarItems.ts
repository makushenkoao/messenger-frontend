import { createSelector } from '@reduxjs/toolkit';
import {
    MdAccountCircle,
    MdFavoriteBorder,
    MdHome,
    MdOutlineChat,
    MdOutlineCreateNewFolder,
    MdOutlineSearch,
} from 'react-icons/md';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteCreatePost,
    getRouteHome,
    getRouteMessages,
    getRouteNotifications,
    getRouteProfile,
    getRouteSearch,
} from '@/shared/const/router';

// TODO: Right Path
export const getSidebarItems = createSelector(getUserAuthData, (userData) => [
    {
        path: getRouteHome(),
        text: 'Home',
        icon: MdHome,
    },
    {
        path: getRouteSearch(),
        text: 'Search',
        icon: MdOutlineSearch,
    },
    {
        path: getRouteMessages(),
        text: 'Messages',
        icon: MdOutlineChat,
    },
    {
        path: getRouteNotifications(),
        text: 'Notifications',
        icon: MdFavoriteBorder,
    },
    {
        path: getRouteCreatePost(),
        text: 'Create',
        icon: MdOutlineCreateNewFolder,
    },
    {
        path: getRouteProfile('makushenkoao'),
        text: 'Profile',
        icon: MdAccountCircle,
    },
]);
