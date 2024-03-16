import React, { forwardRef, InputHTMLAttributes } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import { VStack } from '../Stack';
import { Text } from '../Text';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

export interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
    size?: InputSize;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props: InputProps, ref) => {
        const {
            className,
            value,
            onChange,
            type = 'text',
            placeholder,
            readonly,
            error,
            label,
            size = 'm',
            ...otherProps
        } = props;

        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };

        const mods: Mods = {
            [cls.readonly]: readonly,
            [cls.errorInput]: Boolean(error),
            [cls.disabled]: props.disabled,
        };

        const input = (
            <VStack
                max
                gap="4"
            >
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={classNames(cls.input, mods, [className])}
                    readOnly={readonly}
                    placeholder={placeholder}
                    {...otherProps}
                />
                {error && (
                    <Text
                        text={error}
                        className={cls.errorText}
                    />
                )}
            </VStack>
        );

        if (label) {
            return (
                <VStack
                    max
                    gap="8"
                >
                    <Text text={label} />
                    {input}
                </VStack>
            );
        }

        return input;
    },
);
