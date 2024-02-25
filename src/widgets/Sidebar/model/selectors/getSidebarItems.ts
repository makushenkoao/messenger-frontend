import { createSelector } from '@reduxjs/toolkit';
import {
    MdHome,
    MdOutlineSearch,
    MdOutlineChat,
    MdFavoriteBorder,
    MdOutlineCreateNewFolder,
    MdAccountCircle,
} from 'react-icons/md';
import { getUserAuthData } from '@/entities/User';
import { getRouteProfile, getRouteHome } from '@/shared/const/router';

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
        path: '/messages',
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
