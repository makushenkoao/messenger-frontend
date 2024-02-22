import React, { useState } from 'react';
import { VStack } from '@/shared/ui/Stack';
import cls from './Auth.module.scss';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { ResetPassword } from '../ResetPassword/ResetPassword';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';

type AuthType = 'register' | 'login' | 'reset';

export const Auth = () => {
    const [authType, setAuthType] = useState<AuthType>('login');

    const setLoginAuthType = () => setAuthType('login');
    const setRegisterAuthType = () => setAuthType('register');
    const setResetAuthType = () => setAuthType('reset');

    const handleLogin = () => {};
    const handleRegister = () => {};
    const handleReset = () => {};

    const renderFormTitle = () => {
        switch (authType) {
            case 'login':
                return <Text title="Sign In" />;
            case 'register':
                return <Text title="Sign Up" />;
            case 'reset':
                return <Text title="Reset Password" />;
            default:
                return <Text title="Sign In" />;
        }
    };

    const renderSwitchButtons = () => {
        switch (authType) {
            case 'login':
                return (
                    <VStack gap="8">
                        <Button
                            onClick={setRegisterAuthType}
                            variant="clear"
                        >
                            Register a New Account
                        </Button>
                        <Button
                            onClick={setResetAuthType}
                            variant="clear"
                        >
                            Forgot Password
                        </Button>
                    </VStack>
                );
            case 'reset':
                return (
                    <Button
                        onClick={setLoginAuthType}
                        variant="clear"
                    >
                        Login to Existing Account
                    </Button>
                );
            case 'register':
                return (
                    <Button
                        onClick={setLoginAuthType}
                        variant="clear"
                    >
                        Login to existing account
                    </Button>
                );
            default:
                return (
                    <VStack gap="8">
                        <Button
                            onClick={setRegisterAuthType}
                            variant="clear"
                        >
                            Register a new account
                        </Button>
                        <Button
                            onClick={setResetAuthType}
                            variant="clear"
                        >
                            Forgot Password
                        </Button>
                    </VStack>
                );
        }
    };

    const renderFormFields = () => {
        switch (authType) {
            case 'login':
                return <Login />;
            case 'register':
                return <Register />;
            case 'reset':
                return <ResetPassword />;
            default:
                return <Login />;
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
