import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData, getUserLoading, userActions } from '@/entities/User';
import { bufferToBase64 } from '@/features/File';
import {
    getRouteArchives,
    getRouteProfile,
    getRouteSavedPosts,
    getRouteSettings,
} from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { Skeleton } from '@/shared/ui/Skeleton';

import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const userAuthData = useSelector(getUserAuthData);
    const loading = useSelector(getUserLoading);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!loading && !userAuthData) return null;

    if (loading)
        return (
            <Skeleton
                width={60}
                height={60}
                borderRadius="50%"
            />
        );

    const items = [
        {
            content: 'Profile',
            href: getRouteProfile(userAuthData.nickname),
        },
        {
            content: 'Saved',
            href: getRouteSavedPosts(),
        },
        {
            content: 'Archives',
            href: getRouteArchives(),
        },
        {
            content: 'Settings',
            href: getRouteSettings('edit'),
        },
        {
            content: 'Sign Out',
            onClick: onLogout,
        },
    ];

    return (
        <Dropdown
            className={classNames(cls.dropdown, {}, [className])}
            items={items}
            trigger={
                <Avatar
                    src={bufferToBase64(userAuthData.icon.data, {
                        returnDataURL: true,
                    })}
                    width={44}
                    height={44}
                    username={userAuthData.nickname}
                />
            }
            direction="bottom left"
        />
    );
});
