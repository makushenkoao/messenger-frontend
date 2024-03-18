import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserLoading, resetPassword } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { errorNotify, successNotify } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/Button';
import { PasswordInput } from '@/shared/ui/PasswordInput';
import { VStack } from '@/shared/ui/Stack';

import cls from './ChangePassword.module.scss';

export const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useAppDispatch();
    const loading = useSelector(getUserLoading);

    const handleChangePassword = (value: string) => {
        setNewPassword(value);
    };

    const handleResetPassword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(resetPassword(newPassword))
            .unwrap()
            .then(() => {
                successNotify('Your password has been successfully changed!');
                setNewPassword('');
            })
            .catch((e) => errorNotify(e));
    };

    return (
        <form
            onSubmit={handleResetPassword}
            className={cls.form}
        >
            <VStack
                max
                gap="16"
                align="center"
            >
                <PasswordInput
                    disabled={loading}
                    placeholder="New Password"
                    onChange={handleChangePassword}
                    value={newPassword}
                />
                <Button
                    type="submit"
                    disabled={loading}
                    fullWidth
                >
                    Submit
                </Button>
            </VStack>
        </form>
    );
};
