import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { getUserAuthData, getUserLoading, register } from '@/entities/User';
import { getRouteHome, getRouteLogin } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { errorNotify } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { FileInput } from '@/shared/ui/FileInput';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { RegisterData } from '../../model/types/register';

import cls from './RegisterPage.module.scss';

const RegisterPage = () => {
    const auth = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const loading = useSelector(getUserLoading);
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterData>({
        defaultValues: {
            avatar: null,
            password: '',
            email: '',
            nickname: '',
        },
    });
    const [avatar, setAvatar] = useState<File | null>(null);

    if (auth) {
        return (
            <Navigate
                to={getRouteHome()}
                replace
            />
        );
    }

    const handleNavigateToLogin = () => {
        navigate(getRouteLogin());
    };

    const onSubmit: SubmitHandler<Omit<RegisterData, 'avatar'>> = (data) => {
        dispatch(register({ ...data, avatar }))
            .unwrap()
            .then(() => handleNavigateToLogin())
            .catch((e) => errorNotify(e));
    };

    return (
        <VStack
            className={cls.RegisterPage}
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
                    <Text title="Sign Up" />
                    <form
                        className={cls.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <VStack
                            max
                            gap="16"
                        >
                            <Controller
                                control={control}
                                name="nickname"
                                rules={{
                                    required: 'Nickname is required',
                                    minLength: {
                                        value: 5,
                                        message:
                                            'Nickname should be at least 5 characters',
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message:
                                            'Nickname should contain only letters',
                                    },
                                }}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        placeholder="Enter Username"
                                        error={errors.nickname?.message}
                                        disabled={loading}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="email"
                                rules={{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message:
                                            'Email should have a valid structure',
                                    },
                                }}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        placeholder="Enter Email"
                                        error={errors.email?.message}
                                        disabled={loading}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="password"
                                rules={{
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message:
                                            'Password should be at least 6 characters',
                                    },
                                }}
                                render={({ field }) => (
                                    <PasswordInput
                                        {...field}
                                        placeholder="Enter Password"
                                        error={errors.password?.message}
                                        disabled={loading}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="avatar"
                                render={({ field }) => (
                                    <FileInput
                                        value={avatar}
                                        onFileChange={(file: File) => {
                                            setAvatar(file);
                                            field.onChange(file);
                                        }}
                                        disabled={loading}
                                    />
                                )}
                            />
                            <HStack
                                max
                                justify="end"
                            >
                                <Button
                                    disabled={loading}
                                    type="submit"
                                >
                                    Sign Up
                                </Button>
                            </HStack>
                        </VStack>
                    </form>
                    <Button
                        onClick={handleNavigateToLogin}
                        variant="clear"
                        disabled={loading}
                    >
                        Login to Existing Account
                    </Button>
                </VStack>
            </Card>
        </VStack>
    );
};
export default RegisterPage;
