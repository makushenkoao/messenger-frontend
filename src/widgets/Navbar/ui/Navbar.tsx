import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;

    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            HEADER
        </header>
    );
});
