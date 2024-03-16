import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserLoading, resetPassword } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { errorNotify, successNotify } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { PasswordInput } from '@/shared/ui/PasswordInput';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './ResetPasswordButton.module.scss';


export const ResetPasswordButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useAppDispatch();
    const loading = useSelector(getUserLoading);

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

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
                handleCloseModal();
            })
            .catch((e) => errorNotify(e));
    };

    return (
        <>
            <Button onClick={handleOpenModal}>Reset Password</Button>
            <Modal
                isOpen={isOpen}
                onClose={handleCloseModal}
                lazy
            >
                <form
                    onSubmit={handleResetPassword}
                    className={cls.content}
                >
                    <VStack
                        max
                        gap="32"
                        align="center"
                    >
                        <Text
                            text="Reset Password"
                            bold
                        />
                        <PasswordInput
                            disabled={loading}
                            placeholder="New Password"
                            onChange={handleChangePassword}
                            value={newPassword}
                        />
                        <HStack
                            max
                            gap="8"
                        >
                            <Button
                                disabled={loading}
                                fullWidth
                                color="error"
                                variant="clear"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={loading}
                                fullWidth
                            >
                                Submit
                            </Button>
                        </HStack>
                    </VStack>
                </form>
            </Modal>
        </>
    );
};
