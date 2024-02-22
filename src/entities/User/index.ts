export { type User, WhoCanViewEnum, type Setting } from './model/types/user';
export type { UserSchema } from './model/types/userSchema';
export { userReducer, userActions } from './model/slices/userSlice';
export { login } from './model/services/login/login';
export { register } from './model/services/register/register';
export { initAuthData } from './model/services/initAuthData/initAuthData';
export { updateProfile } from './model/services/updateProfile/updateProfile';
export { addRemoveFriend } from './model/services/addRemoveFriend/addRemoveFriend';
export { saveUnSavePost } from './model/services/saveUnSavePost/saveUnSavePost';
export {
    getUserError,
    getUserLoading,
    getUserAuthData,
    getUserMounted,
} from './model/selectors/user';
export {
    getUserDataByIdQuery,
    useGetUserDataByUserNameQuery,
    useGetUserDataByIdQuery,
    useGetUserRecommendationsQuery,
    useUpdateSettingsMutation,
} from './api/userApi';
