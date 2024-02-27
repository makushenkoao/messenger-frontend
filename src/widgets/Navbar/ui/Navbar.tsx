import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
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
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
        </header>
    );
});
