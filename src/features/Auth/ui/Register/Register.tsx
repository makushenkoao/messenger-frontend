import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import cls from '../Auth/Auth.module.scss';
import {PasswordInput} from "@/features/PasswordInput";

interface RegisterData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

export const Register = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterData>();

    const onSubmit: SubmitHandler<RegisterData> = (data) => {
        console.log(data);
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
                    name="firstName"
                    rules={{
                        required: 'First name is required',
                        minLength: {
                            value: 3,
                            message:
                                'First name should be at least 3 characters',
                        },
                    }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            placeholder="Enter First Name"
                            error={errors.firstName?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="lastName"
                    rules={{
                        required: 'Last name is required',
                        minLength: {
                            value: 3,
                            message:
                                'Last name should be at least 3 characters',
                        },
                    }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            placeholder="Enter Last Name"
                            error={errors.lastName?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="username"
                    rules={{
                        required: 'Username is required',
                        minLength: {
                            value: 5,
                            message: 'Username should be at least 5 characters',
                        },
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'Username should contain only letters',
                        },
                    }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            placeholder="Enter Username"
                            error={errors.username?.message}
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
                            type="password"
                            error={errors.password?.message}
                        />
                    )}
                />
                <HStack
                    max
                    justify="end"
                >
                    <Button type="submit">Sign Up</Button>
                </HStack>
            </VStack>
        </form>
    );
};
