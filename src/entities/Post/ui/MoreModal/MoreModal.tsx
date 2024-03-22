import React, { useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { errorNotify, successNotify } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { VStack } from '@/shared/ui/Stack';

import { useDeletePost } from '../../lib/useDeletePost/useDeletePost';
import { EditPostModal } from '../EditPostModal/EditPostModal';

import cls from './MoreModal.module.scss';

interface MoreModalProps {
    isOpen: boolean;
    onClose: () => void;
    isPostAuthor?: boolean;
}

export const MoreModal = (props: MoreModalProps) => {
    const { isOpen, onClose, isPostAuthor = true } = props;
    const [isOpenEditPostModal, setIsOpenEditPostModal] = useState(false);
    const { loading, handleDeletePost } = useDeletePost({
        id: '65fdb5fc5a8312681080cda3',
        onClose,
    });

    const handleOpenEditPostModal = () => {
        onClose();
        setIsOpenEditPostModal(true);
    };
    const handleCloseEditPostModal = () => setIsOpenEditPostModal(false);

    const handleCopyPostUrl = () => {
        navigator.clipboard
            .writeText('http://localhost:3000/posts/coppied-post')
            .then(() => {
                onClose();
                successNotify(
                    'The link to the publication was successfully copied',
                );
            })
            .catch(() => {
                onClose();
                errorNotify('There was an error copying the post link');
            });
    };

    const options = [];

    if (isPostAuthor) {
        options.push(
            {
                id: '1',
                content: 'Delete',
                onClick: () => handleDeletePost(),
                important: true,
            },
            {
                id: '2',
                content: 'Edit PostCard',
                onClick: handleOpenEditPostModal,
            },
            {
                id: '3',
                content: 'Archive',
                onClick: () => console.log('click'),
            },
            {
                id: '4',
                content: 'Save PostCard',
                onClick: () => console.log('click'),
            },
            {
                id: '5',
                content: 'Go to Publication',
                onClick: () => console.log('click'),
            },
            {
                id: '6',
                content: 'Send to',
                onClick: () => console.log('click'),
            },
            {
                id: '7',
                content: 'Copy PostCard Link',
                onClick: () => handleCopyPostUrl(),
            },
            {
                id: '8',
                content: 'Cancel',
                onClick: onClose,
            },
        );
    } else {
        options.push(
            {
                id: '1',
                content: 'Unfollow',
                onClick: () => console.log('click'),
                important: true,
            },
            {
                id: '2',
                content: 'Save PostCard',
                onClick: () => console.log('click'),
            },
            {
                id: '3',
                content: 'Go to Publication',
                onClick: () => console.log('click'),
            },
            {
                id: '4',
                content: 'Send to',
                onClick: () => console.log('click'),
            },
            {
                id: '5',
                content: 'Copy PostCard Link',
                onClick: () => console.log('click'),
            },
            {
                id: '6',
                content: 'Cancel',
                onClick: onClose,
            },
        );
    }

    return (
        <>
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
                    {options.map((item, index) => (
                        <Button
                            key={item.id}
                            disabled={loading}
                            fullWidth
                            variant="clear"
                            onClick={item.onClick}
                            className={classNames(
                                cls.btn,
                                {
                                    [cls.lastBtn]: index === options.length - 1,
                                },
                                [],
                            )}
                            color={item.important ? 'error' : 'normal'}
                        >
                            {item.content}
                        </Button>
                    ))}
                </VStack>
            </Modal>
            <EditPostModal
                isOpen={isOpenEditPostModal}
                onClose={handleCloseEditPostModal}
            />
        </>
    );
};
