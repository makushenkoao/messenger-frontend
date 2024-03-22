import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
    getPostById,
    getPostDetailsData,
    getPostDetailsError,
    getPostDetailsLoading,
    MoreModal,
    PostDetailsCard,
    postDetailsReducer,
    ShareModal,
} from '@/entities/Post';
import { PostCommentsCard } from '@/features/PostCommentsCard';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { BackIcon } from '@/widgets/BackIcon';
import { PostDetailsAdditionalInfo } from '@/widgets/PostDetailsAdditionalInfo';

import { PostDetailsPageLoader } from '../PostDetailsPageLoader/PostDetailsPageLoader';

const reducers: ReducersList = {
    postDetails: postDetailsReducer,
};

const PostDetailsPage = () => {
    // const { id } = useParams<{ id: string }>();
    const [isOpenMoreModal, setIsOpenMoreModal] = useState(false);
    const [isOpenShareModal, setIsOpenShareModal] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const dispatch = useAppDispatch();
    const post = useSelector(getPostDetailsData);
    const loading = useSelector(getPostDetailsLoading);
    const error = useSelector(getPostDetailsError);

    const id = '65f9bd3821a828f589ca2b69';

    useEffect(() => {
        dispatch(getPostById(id));
    }, [dispatch]);

    const toggleIsFav = () => setIsFav((prevState) => !prevState);
    const toggleIsSaved = () => setIsSaved((prevState) => !prevState);

    const onOpenShareModal = () => setIsOpenShareModal(true);
    const onCloseShareModal = () => setIsOpenShareModal(false);

    const onOpenMoreModal = () => setIsOpenMoreModal(true);
    const onCloseMoreModal = () => setIsOpenMoreModal(false);

    if (loading) {
        return <PostDetailsPageLoader />;
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <StickyContentLayout
                content={
                    <VStack
                        max
                        gap="16"
                    >
                        <PostDetailsCard />
                        <PostCommentsCard />
                        <MoreModal
                            isOpen={isOpenMoreModal}
                            onClose={onCloseMoreModal}
                        />
                        <ShareModal
                            isOpen={isOpenShareModal}
                            onClose={onCloseShareModal}
                        />
                    </VStack>
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
