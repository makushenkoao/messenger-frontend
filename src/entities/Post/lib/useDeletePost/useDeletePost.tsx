import { useState } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { errorNotify, successNotify } from '@/shared/lib/utils/notify';

import { deletePost } from '../../model/services/deletePost/deletePost';

interface UseUpdatePostProps {
    id: string;
    onClose?: () => void;
}

export const useDeletePost = (props: UseUpdatePostProps) => {
    const { id, onClose } = props;

    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const handleDeletePost = () => {
        setLoading(true);

        dispatch(deletePost(id))
            .unwrap()
            .then(() => {
                successNotify('PostCard successfully deleted!');
                setLoading(false);
                onClose();
            })
            .catch((e) => {
                errorNotify(e);
                setLoading(false);
                onClose();
            });
    };

    return {
        loading,
        handleDeletePost,
    };
};
