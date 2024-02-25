import { PostList } from '@/entities/Post';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { RecommendationsCard } from '@/widgets/RecommedationsCard';

const HomePage = () => {
    return (
        <StickyContentLayout
            content={<PostList />}
            right={<RecommendationsCard />}
        />
    );
};
export default HomePage;
