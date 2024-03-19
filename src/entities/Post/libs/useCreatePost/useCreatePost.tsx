import { useState } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { errorNotify, successNotify } from '@/shared/lib/utils/notify';

import { createPost } from '../../model/slices/createPost/createPost';

interface CreatePostData {
    title: string;
    text: string;
}

const initialState: CreatePostData = {
    title: '',
    text: '',
};

export const useCreatePost = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<CreatePostData>({ ...initialState });
    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useAppDispatch();
    const handleOpenModal = () => setIsOpenModal(true);
    const handleCloseModal = () => setIsOpenModal(false);

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
                handleCloseModal();
            })
            .catch((e) => {
                errorNotify(e);
                setLoading(false);
                handleCloseModal();
            });
    };

    const handleChangeData = (value: string, field: keyof CreatePostData) => {
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
        isOpenModal,
        handleOpenModal,
        handleCloseModal,
    };
};
