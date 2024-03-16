import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { userActions } from '@/entities/User';
import { getRouteSettings } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { VStack } from '@/shared/ui/Stack';

import cls from './ProfileSettingsModal.module.scss';

interface ProfileSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ProfileSettingsModal = (props: ProfileSettingsModalProps) => {
    const { isOpen, onClose } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const navigateToSettings = () => {
        navigate(getRouteSettings());
    };

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const buttons = [
        {
            id: '1',
            content: 'Settings',
            onClick: () => navigateToSettings(),
        },
        {
            id: '2',
            content: 'Sign Out',
            onClick: () => onLogout(),
        },
        {
            id: '3',
            content: 'Cancel',
            onClick: onClose,
        },
    ];

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            padding="none"
            lazy
        >
            <VStack
                gap="0"
                max
            >
                {buttons.map((item, index) => (
                    <Button
                        key={item.id}
                        fullWidth
                        variant="clear"
                        onClick={item.onClick}
                        className={classNames(
                            cls.btn,
                            {
                                [cls.lastBtn]: index === buttons.length - 1,
                            },
                            [],
                        )}
                    >
                        {item.content}
                    </Button>
                ))}
            </VStack>
        </Modal>
    );
};
