import { memo } from 'react';
import { MdLightMode,MdModeNight } from 'react-icons/md';

import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Icon } from '@/shared/ui/Icon';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Icon
            className={classNames(cls.icon, {}, [className])}
            onClick={() => toggleTheme()}
            width={30}
            height={30}
            clickable
            svg={theme === Theme.DARK ? MdLightMode : MdModeNight}
        />
    );
});
