import { useState } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { errorNotify, successNotify } from '@/shared/lib/utils/notify';

import { createPost } from '../../model/services/createPost/createPost';

interface CreatePostData {
    title: string;
    text: string;
}

type CreatePostFields = keyof CreatePostData;

const initialState: CreatePostData = {
    title: '',
    text: '',
};

interface UseCreatePostProps {
    onClose?: () => void;
}

export const useCreatePost = (props?: UseCreatePostProps) => {
    const [photos, setPhotos] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<CreatePostData>({ ...initialState });
    const dispatch = useAppDispatch();

    const handleChangePhotos = (newPhotos: File[]) => {
        setPhotos(newPhotos);
    };
    const handleCreatePost = () => {
        setLoading(true);

        dispatch(createPost({ ...data, photos }))
            .unwrap()
            .then(() => {
                successNotify('PostCard successfully created');
                setData({ ...initialState });
                setPhotos([]);
                setLoading(false);
                props?.onClose();
            })
            .catch((e) => {
                errorNotify(e);
                setLoading(false);
                props?.onClose();
            });
    };

    const handleChangeData = (value: string, field: CreatePostFields) => {
        setData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    return {
        photos,
        loading,
        data,
        handleChangeData,
        handleCreatePost,
        handleChangePhotos,
    };
};
