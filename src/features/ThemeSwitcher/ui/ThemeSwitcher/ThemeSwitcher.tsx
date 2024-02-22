import { memo } from 'react';
import { Icon } from '@/shared/ui/Icon';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/theme.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { toggleTheme } = useTheme();

    return (
        <Icon
            className={classNames('', {}, [className])}
            onClick={() => toggleTheme()}
            clickable
            svg={ThemeIcon}
        />
    );
});
