import { IconType } from 'react-icons';
import React from 'react';
import cls from './InputWithAddons.module.scss';
import { Input } from '../Input';
import { Icon } from '../Icon';
import { classNames } from '@/shared/lib/classNames/classNames';

interface InputWithAddonsProps {
    leftIcon?: {
        icon: IconType;
        clickable?: boolean;
        onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    };
    rightIcon?: {
        icon: IconType;
        clickable?: boolean;
        onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    };
}

export const InputWithAddons = (props: InputWithAddonsProps) => {
    const { rightIcon, leftIcon } = props;

    return (
        <div className={cls.InputWithAddons}>
            {leftIcon && (
                <div
                    className={classNames(cls.iconWrapper, {}, [
                        cls.leftIconWrapper,
                    ])}
                >
                    <Icon
                        width={30}
                        height={30}
                        svg={leftIcon?.icon}
                        clickable={leftIcon?.clickable}
                        className={cls.icon}
                        onClick={leftIcon?.onClick}
                    />
                </div>
            )}
            <Input
                className={classNames(
                    cls.input,
                    {
                        [cls.rightPadding]: Boolean(rightIcon?.icon),
                        [cls.leftPadding]: Boolean(leftIcon?.icon),
                    },
                    [],
                )}
            />
            {rightIcon && (
                <div
                    className={classNames(cls.iconWrapper, {}, [
                        cls.rightIconWrapper,
                    ])}
                >
                    <Icon
                        width={30}
                        height={30}
                        svg={rightIcon?.icon}
                        clickable={rightIcon?.clickable}
                        className={cls.icon}
                        onClick={rightIcon?.onClick}
                    />
                </div>
            )}
        </div>
    );
};
