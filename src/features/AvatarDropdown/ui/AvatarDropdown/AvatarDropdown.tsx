import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getRouteArchives,
    getRouteProfile,
    getRouteSavedPosts,
} from '@/shared/const/router';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import AvatarImage from '@/shared/assets/images/avatar.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const userAuthData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    // TODO
    // if (!userAuthData) {
    //     return null;
    // }

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
