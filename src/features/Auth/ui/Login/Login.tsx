import React, { useState } from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import cls from '../Auth/Auth.module.scss';
import { PasswordInput } from '@/features/PasswordInput';

interface LoginData {
    email: string;
    password: string;
}

type LoginFields = keyof LoginData;

const initialState: LoginData = {
    email: '',
    password: '',
};

interface LoginProps {}

export const Login = (props: LoginProps) => {
    const {} = props;

    const [data, setData] = useState<LoginData>({ ...initialState });

    const handleChange = (value: string, field: LoginFields) => {
        setData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleLogin = (data: LoginData) => {
        console.log(data);
    };

    return (
        <form className={cls.form}>
            <VStack
                max
                gap="16"
            >
                <Input
                    placeholder="Enter Email"
                    value={data.email}
                    onChange={(value) => handleChange(value, 'email')}
                />
                <PasswordInput
                    placeholder="Enter Password"
                    value={data.password}
                    onChange={(value) => handleChange(value, 'password')}
                />
                <HStack
                    max
                    justify="end"
                >
                    <Button onClick={() => handleLogin(data)}>Sign In</Button>
                </HStack>
            </VStack>
        </form>
    );
};
