import { forwardRef, useState } from 'react';
import { Input, InputProps } from '../Input';
import { Button } from '../Button';
import cls from './PasswordInput.module.scss';

type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    (props, ref) => {
        const [isVisible, setIsVisible] = useState(false);

        const handleClick = () => {
            setIsVisible((prevState) => !prevState);
        };

        return (
            <div className={cls.PasswordInput}>
                <Input
                    type={isVisible ? 'text' : 'password'}
                    ref={ref}
                    {...props}
                />
                <Button
                    variant="clear"
                    className={cls.button}
                    onClick={handleClick}
                    disabled={props.disabled}
                >
                    {isVisible ? 'Hide' : 'Show'}
                </Button>
            </div>
        );
    },
);
