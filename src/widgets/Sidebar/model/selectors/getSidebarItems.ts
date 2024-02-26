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
    getRouteHome,
    getRouteMessages,
    getRouteProfile,
} from '@/shared/const/router';

// TODO: Right Path
export const getSidebarItems = createSelector(getUserAuthData, (userData) => [
    {
        path: getRouteHome(),
        text: 'Home',
        icon: MdHome,
    },
    {
        path: '/search',
        text: 'Search',
        icon: MdOutlineSearch,
    },
    {
        path: getRouteMessages(),
        text: 'Messages',
        icon: MdOutlineChat,
    },
    {
        path: '/notifications',
        text: 'Notifications',
        icon: MdFavoriteBorder,
    },
    {
        path: '/create',
        text: 'Create',
        icon: MdOutlineCreateNewFolder,
    },
    {
        path: getRouteProfile('makushenkoao'),
        text: 'Profile',
        icon: MdAccountCircle,
    },
]);
