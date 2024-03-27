import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData, userActions } from '@/entities/User';
import AvatarImage from '@/shared/assets/images/avatar.png';
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

import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const userAuthData = useSelector(getUserAuthData);

    console.log(userAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const items = [
        {
            content: 'Profile',
            href: getRouteProfile('makushenkoao'),
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
                    src={AvatarImage}
                    width={60}
                    height={60}
                    username="makushenkoao"
                />
            }
            direction="bottom left"
        />
    );
});
