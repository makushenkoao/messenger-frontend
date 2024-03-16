import React, { useState } from 'react';
import { Controller,SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/Button';
import { FileInput } from '@/shared/ui/FileInput';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput';
import { HStack, VStack } from '@/shared/ui/Stack';

import { RegisterData } from '../../model/types/auth';

import cls from '../Auth/Auth.module.scss';

interface RegisterProps {
    handleRegister: (data: RegisterData) => void;
    loading: boolean;
}

export const Register = (props: RegisterProps) => {
    const { handleRegister, loading } = props;

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

    const onSubmit: SubmitHandler<Omit<RegisterData, 'avatar'>> = (data) => {
        handleRegister({ ...data, avatar });
    };

    return (
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
                            message: 'Nickname should be at least 5 characters',
                        },
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'Nickname should contain only letters',
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
                            message: 'Email should have a valid structure',
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
                            message: 'Password should be at least 6 characters',
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
    );
};
