import { memo, useState } from 'react';
import { Input, InputProps } from '@/shared/ui/Input';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '../../assets/icons/eye.svg';
import EyeIconSlash from '../../assets/icons/eye-slash.svg';

export const PasswordInput = memo((props: InputProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible((prevState) => !prevState);
    };

    return (
        <Input
            type={isVisible ? 'text' : 'password'}
            addonRight={
                isVisible ? (
                    <Icon
                        svg={EyeIconSlash}
                        clickable
                        onClick={handleClick}
                    />
                ) : (
                    <Icon
                        svg={EyeIcon}
                        clickable
                        onClick={handleClick}
                    />
                )
            }
            {...props}
        />
    );
});
