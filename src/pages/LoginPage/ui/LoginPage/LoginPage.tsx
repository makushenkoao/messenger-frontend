import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { getUserAuthData, getUserLoading, login } from '@/entities/User';
import { getRouteHome, getRouteRegister } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { errorNotify } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { LoginData, LoginFields } from '../../model/types/login';

import cls from './LoginPage.module.scss';

const initialState: LoginData = {
    email: 'test@gmail.com',
    password: 'test123',
};

const LoginPage = () => {
    const auth = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const loading = useSelector(getUserLoading);
    const navigate = useNavigate();
    const [data, setData] = useState<LoginData>({ ...initialState });

    if (auth) {
        return (
            <Navigate
                to={getRouteHome()}
                replace
            />
        );
    }

    const handleChange = (value: string, field: LoginFields) => {
        setData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login(data))
            .unwrap()
            .then(() => navigate(getRouteHome()))
            .catch((e) => errorNotify(e));
        setData({ ...initialState });
    };

    const handleNavigateToRegister = () => navigate(getRouteRegister());

    return (
        <VStack
            className={cls.LoginPage}
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
                    <Text title="Sign In" />
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
                                onChange={(value) =>
                                    handleChange(value, 'email')
                                }
                                disabled={loading}
                            />
                            <PasswordInput
                                placeholder="Enter Password"
                                value={data.password}
                                onChange={(value) =>
                                    handleChange(value, 'password')
                                }
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
                    <Button
                        onClick={handleNavigateToRegister}
                        variant="clear"
                        disabled={loading}
                    >
                        Register a New Account
                    </Button>
                </VStack>
            </Card>
        </VStack>
    );
};
export default LoginPage;
