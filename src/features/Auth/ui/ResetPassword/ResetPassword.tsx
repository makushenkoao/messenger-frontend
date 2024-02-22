import { useState } from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import cls from '../Auth/Auth.module.scss';

export const ResetPassword = () => {
    const [email, setEmail] = useState<string>('');

    const onChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleResetPassword = () => {
        console.log(email);
    };

    return (
        <form className={cls.form}>
            <VStack
                max
                gap="16"
            >
                <Input
                    placeholder="Enter Email"
                    value={email}
                    onChange={onChangeEmail}
                />
                <HStack
                    max
                    justify="end"
                >
                    <Button onClick={handleResetPassword}>
                        Reset Password
                    </Button>
                </HStack>
            </VStack>
        </form>
    );
};
