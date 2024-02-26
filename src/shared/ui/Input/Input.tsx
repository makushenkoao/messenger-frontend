import React, {
    InputHTMLAttributes,
    memo,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';

import cls from './Input.module.scss';
import { HStack, VStack } from '../Stack';
import { Text } from '../Text';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

type InputLabelDirection = 'col' | 'row';

export interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    size?: InputSize;
    labelDirection?: InputLabelDirection;
    error?: string;
}

// TODO: Fix Ref Error
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        addonLeft,
        error,
        addonRight,
        label,
        size = 'm',
        labelDirection = 'col',
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.widthAddonLeft]: Boolean(addonLeft),
        [cls.widthAddonRight]: Boolean(addonRight),
        [cls.errorInput]: Boolean(error),
    };

    const input = (
        <VStack
            max
            gap="4"
        >
            <div
                className={classNames(cls.InputWrapper, mods, [
                    className,
                    cls[size],
                ])}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    readOnly={readonly}
                    placeholder={placeholder}
                    {...otherProps}
                />
                <div className={cls.addonRight}>{addonRight}</div>
            </div>
            {error && (
                <Text
                    text={error}
                    className={cls.errorText}
                />
            )}
        </VStack>
    );

    if (label && labelDirection === 'col') {
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

    if (label && labelDirection === 'row') {
        return (
            <HStack
                max
                gap="8"
            >
                <Text text={label} />
                {input}
            </HStack>
        );
    }

    return input;
});