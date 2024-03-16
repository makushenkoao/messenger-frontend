import { useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserLoading, login, register } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {errorNotify} from "@/shared/lib/utils/notify";
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { AuthType, LoginData, RegisterData } from '../../model/types/auth';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';

import cls from './Auth.module.scss';

export const Auth = () => {
    const [authType, setAuthType] = useState<AuthType>('login');
    const dispatch = useAppDispatch();
    const loading = useSelector(getUserLoading);

    const setLoginAuthType = () => setAuthType('login');
    const setRegisterAuthType = () => setAuthType('register');
    const handleLogin = (data: LoginData) => {
        dispatch(login(data))
            .unwrap()
            .catch((e) => errorNotify(e));
    };
    const handleRegister = (data: RegisterData) => {
        dispatch(register(data))
            .unwrap()
            .then(() => setLoginAuthType())
            .catch((e) => errorNotify(e));
    };

    const renderFormTitle = () => {
        switch (authType) {
            case 'login':
                return <Text title="Sign In" />;
            case 'register':
                return <Text title="Sign Up" />;
            default:
                return <Text title="Sign In" />;
        }
    };

    const renderSwitchButtons = () => {
        switch (authType) {
            case 'login':
                return (
                    <Button
                        onClick={setRegisterAuthType}
                        variant="clear"
                        disabled={loading}
                    >
                        Register a New Account
                    </Button>
                );
            case 'register':
                return (
                    <Button
                        onClick={setLoginAuthType}
                        variant="clear"
                        disabled={loading}
                    >
                        Login to Existing Account
                    </Button>
                );
            default:
                return (
                    <Button
                        onClick={setRegisterAuthType}
                        variant="clear"
                        disabled={loading}
                    >
                        Register a New Account
                    </Button>
                );
        }
    };

    const renderFormFields = () => {
        switch (authType) {
            case 'login':
                return (
                    <Login
                        handleLogin={handleLogin}
                        loading={loading}
                    />
                );
            case 'register':
                return (
                    <Register
                        handleRegister={handleRegister}
                        loading={loading}
                    />
                );
            default:
                return (
                    <Login
                        handleLogin={handleLogin}
                        loading={loading}
                    />
                );
        }
    };

    return (
        <VStack
            className={cls.Auth}
            justify="center"
            align="center"
        >
            <Card
                padding="24"
                variant="light"
            >
                <VStack
                    max
                    gap="16"
                >
                    {renderFormTitle()}
                    {renderFormFields()}
                    {renderSwitchButtons()}
                </VStack>
            </Card>
        </VStack>
    );
};
