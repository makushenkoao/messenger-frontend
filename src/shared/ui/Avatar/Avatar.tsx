import { CSSProperties, memo, useMemo } from 'react';
import { TailSpin } from 'react-loader-spinner';

import DefaultUserAvatar from '@/shared/assets/images/user.png';
import { classNames } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../AppImage';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    src?: string;
    username?: string;
}

export const Avatar = memo((props: AvatarProps) => {
    const { width = 32, height = 32, src, className, username } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width,
            minHeight: height,
            maxHeight: height,
        }),
        [height, width],
    );

    const fallback = (
        <TailSpin
            height={height}
            width={width}
            color="black"
            ariaLabel="loading"
        />
    );

    if (!src) {
        return (
            <AppImage
                width={width}
                height={height}
                src={DefaultUserAvatar}
                alt={`${username}'s avatar`}
                className={classNames(cls.Avatar, {}, [className])}
            />
        );
    }

    return (
        <AppImage
            fallback={fallback}
            src={src}
            alt={`${username}'s avatar`}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
});
