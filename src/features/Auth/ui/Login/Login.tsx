import React, { useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput';
import { HStack, VStack } from '@/shared/ui/Stack';

import { LoginData, LoginFields } from '../../model/types/auth';

import cls from '../Auth/Auth.module.scss';

const initialState: LoginData = {
    email: 'admin@gmail.com',
    password: 'admin123',
};

interface LoginProps {
    handleLogin: (data: LoginData) => void;
    loading: boolean;
}

export const Login = (props: LoginProps) => {
    const { handleLogin, loading } = props;

    const [data, setData] = useState<LoginData>({ ...initialState });

    const handleChange = (value: string, field: LoginFields) => {
        setData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin(data);
        setData({ ...initialState });
    };

    return (
        <form
            className={cls.form}
            onSubmit={onSubmit}
        >
            <VStack
                max
                gap="16"
            >
                <Input
                    placeholder="Enter Email"
                    value={data.email}
                    onChange={(value) => handleChange(value, 'email')}
                    disabled={loading}
                />
                <PasswordInput
                    placeholder="Enter Password"
                    value={data.password}
                    onChange={(value) => handleChange(value, 'password')}
                    disabled={loading}
                />
                <HStack
                    max
                    justify="end"
                >
                    <Button
                        disabled={loading}
                        type="submit"
                    >
                        Sign In
                    </Button>
                </HStack>
            </VStack>
        </form>
    );
};
