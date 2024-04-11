export {
    getProfilePostsData,
    getProfilePostsError,
    getProfilePostsLoading,
} from './model/selectors/profilePosts';
export { getNextProfilePostsList } from './model/services/getNextProfilePostsList/getNextProfilePostsList';
export { getProfilePostsList } from './model/services/getProfilePostsList/getProfilePostsList';
export { initProfilePosts } from './model/services/initProfilePosts/initProfilePosts';
export {
    profilePostsActions,
    profilePostsReducer,
} from './model/slices/profilePostsSlice';
export type { ProfilePostsSchema } from './model/types/profilePostsSchema';
