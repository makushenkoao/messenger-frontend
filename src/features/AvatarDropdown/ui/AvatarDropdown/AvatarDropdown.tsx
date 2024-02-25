import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import { getUserAuthData, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRouteProfile } from '@/shared/const/router';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import AvatarImage from '@/shared/assets/images/avatar.png';

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
            content: (
                <Text
                    align="center"
                    text="Sign Out"
                    variant="error"
                />
            ),
            onClick: onLogout,
        },
    ];

    return (
        <Dropdown
            className={className}
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
