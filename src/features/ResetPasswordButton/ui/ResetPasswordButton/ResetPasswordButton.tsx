import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { getUserError, getUserLoading, resetPassword } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ResetPasswordButton.module.scss';
import { PasswordInput } from '@/shared/ui/PasswordInput';

export const ResetPasswordButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useAppDispatch();
    const loading = useSelector(getUserLoading);
    const error = useSelector(getUserError);

    const notifySuccess = () =>
        toast('Your password has been successfully changed!', {
            position: 'top-right',
            type: 'success',
        });

    const notifyError = () =>
        toast(error, {
            position: 'top-right',
            type: 'error',
        });

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    const handleChangePassword = (value: string) => {
        setNewPassword(value);
    };

    const handleResetPassword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(resetPassword(newPassword))
            .unwrap()
            .then(() => notifySuccess())
            .catch(() => notifyError());
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
