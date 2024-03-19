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
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<CreatePostData>({ ...initialState });
    const dispatch = useAppDispatch();

    const handleChangeFile = (file: File) => {
        setSelectedFile(file);
    };

    const handleCreatePost = () => {
        setLoading(true);

        dispatch(createPost(data))
            .unwrap()
            .then(() => {
                successNotify('Post successfully created');
                setData({ ...initialState });
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
        selectedFile,
        loading,
        data,
        handleChangeData,
        handleCreatePost,
        handleChangeFile,
    };
};
