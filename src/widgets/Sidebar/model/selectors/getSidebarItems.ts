import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getRouteProfile, getRouteHome } from '@/shared/const/router';
import MainIcon from '@/shared/assets/icons/home.svg';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => [
    {
        path: getRouteHome(),
        text: 'Home',
        icon: MainIcon,
    },
    {
        path: getRouteProfile(''),
        text: 'Profile',
        icon: MainIcon,
    },
]);
