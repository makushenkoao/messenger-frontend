import { useState } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { errorNotify, successNotify } from '@/shared/lib/utils/notify';

import { updatePost } from '../../model/services/updatePost/updatePost';

interface UpdateEditPostData {
    title: string;
    text: string;
}

type UpdatePostFields = keyof UpdateEditPostData;

const initialState: UpdateEditPostData = {
    title: '',
    text: '',
};

interface UseUpdatePostProps {
    id: string;
    onClose?: () => void;
}

export const useUpdatePost = (props: UseUpdatePostProps) => {
    const { id, onClose } = props;

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<UpdateEditPostData>({ ...initialState });
    const dispatch = useAppDispatch();
    const handleUpdatePost = () => {
        setLoading(true);

        dispatch(
            updatePost({
                id,
                ...data,
            }),
        )
            .unwrap()
            .then(() => {
                successNotify('PostCard successfully updated!');
                setData({ ...initialState });
                setLoading(false);
                onClose();
            })
            .catch((e) => {
                errorNotify(e);
                setLoading(false);
                onClose();
            });
    };

    const handleChangeData = (value: string, field: UpdatePostFields) => {
        setData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    return {
        loading,
        data,
        handleChangeData,
        handleUpdatePost,
    };
};
