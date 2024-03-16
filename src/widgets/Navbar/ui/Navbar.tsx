import { memo } from 'react';

import { AvatarDropdown } from '@/features/AvatarDropdown';
import { CreatePostButton } from '@/features/CreatePostButton';
import { NotificationButton } from '@/features/NotificationButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;

    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack gap="16">
                <CreatePostButton />
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
        </header>
    );
});
