import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPostById, postDetailsReducer } from '@/entities/Post';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { BackIcon } from '@/widgets/BackIcon';
import { PostDetailsAdditionalInfo } from '@/widgets/PostDetailsAdditionalInfo';

import { PostDetails } from '../PostDetails/PostDetails';

const reducers: ReducersList = {
    postDetails: postDetailsReducer,
};

const PostDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [isOpenMoreModal, setIsOpenMoreModal] = useState(false);
    const [isOpenShareModal, setIsOpenShareModal] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPostById(id));
    }, [dispatch]);

    const toggleIsFav = () => setIsFav((prevState) => !prevState);
    const toggleIsSaved = () => setIsSaved((prevState) => !prevState);

    const onOpenShareModal = () => setIsOpenShareModal(true);
    const onCloseShareModal = () => setIsOpenShareModal(false);

    const onOpenMoreModal = () => setIsOpenMoreModal(true);
    const onCloseMoreModal = () => setIsOpenMoreModal(false);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <StickyContentLayout
                content={
                    <PostDetails
                        onCloseShareModal={onCloseShareModal}
                        onCloseMoreModal={onCloseMoreModal}
                        isOpenMoreModal={isOpenMoreModal}
                        isOpenShareModal={isOpenShareModal}
                    />
                }
                left={<BackIcon />}
                right={
                    <PostDetailsAdditionalInfo
                        isSaved={isSaved}
                        isFavorite={isFav}
                        onOpenShareModal={onOpenShareModal}
                        onOpenMoreModal={onOpenMoreModal}
                        toggleIsFavorite={toggleIsFav}
                        toggleIsSaved={toggleIsSaved}
                    />
                }
            />
        </DynamicModuleLoader>
    );
};
export default PostDetailsPage;
