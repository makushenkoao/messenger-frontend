import { memo } from 'react';
import { MdModeNight, MdLightMode } from 'react-icons/md';
import { Icon } from '@/shared/ui/Icon';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme } from '@/shared/const/theme';
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
