import { memo } from 'react';
import { HStack } from '../Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';
import Logo from '@/shared/assets/images/logo.png';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    width?: string | number;
    height?: string | number;
}

export const AppLogo = memo(
    ({ className, width = 50, height = 50 }: AppLogoProps) => {
        return (
            <HStack
                max
                justify="center"
                className={classNames(cls.appLogoWrapper, {}, [className])}
            >
                <AppImage
                    src={Logo}
                    width={width}
                    height={height}
                    className={cls.appLogo}
                />
                <div className={cls.gradientBig} />
                <div className={cls.gradientSmall} />
            </HStack>
        );
    },
);
