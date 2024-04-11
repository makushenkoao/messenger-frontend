import {
    MdAccountCircle,
    MdHome,
    MdOutlineChat,
    MdOutlineCreateNewFolder,
    MdOutlineSearch,
} from 'react-icons/md';
import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import {
    getRouteCreatePost,
    getRouteHome,
    getRouteMessages,
    getRouteProfile,
    getRouteSearch,
} from '@/shared/const/router';

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
        path: getRouteCreatePost(),
        text: 'Create',
        icon: MdOutlineCreateNewFolder,
    },
    {
        path: getRouteProfile(userData.nickname),
        text: 'Profile',
        icon: MdAccountCircle,
    },
]);
