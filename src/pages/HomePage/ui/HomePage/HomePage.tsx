import { useEffect } from 'react';

import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { RecommendationsCard } from '@/widgets/RecommedationsCard';

import { getNextPostsList } from '../../model/services/getNextPostsList/getNextPostsList';
import { initPosts } from '../../model/services/initPosts/initPosts';
import { postsReducer } from '../../model/slices/postsSlice';
import { PostsInfiniteList } from '../PostsInfiniteList/PostsInfiniteList';

const reducers: ReducersList = {
    posts: postsReducer,
};

const HomePage = () => {
    const dispatch = useAppDispatch();

    const onLoadNextPart = () => {
        dispatch(getNextPostsList());
    };

    useEffect(() => {
        dispatch(initPosts());
    }, []);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <StickyContentLayout
                content={
                    <Page onScrollEnd={onLoadNextPart}>
                        <PostsInfiniteList />
                    </Page>
                }
                right={<RecommendationsCard />}
            />
        </DynamicModuleLoader>
    );
};
export default HomePage;
