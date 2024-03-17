export {
    getUserDataByIdQuery,
    useGetUserDataByIdQuery,
    useGetUserDataByUserNameQuery,
    useGetUserRecommendationsQuery,
    useUpdateSettingsMutation,
} from './api/userApi';
export {
    getUserAuthData,
    getUserError,
    getUserLoading,
    getUserMounted,
} from './model/selectors/user';
export { login } from './model/services/auth/login';
export { register } from './model/services/auth/register';
export { initAuthData } from './model/services/initAuthData/initAuthData';
export { resetPassword } from './model/services/resetPassword/resetPassword';
export { userActions, userReducer } from './model/slices/userSlice';
export { type Setting, type User, WhoCanViewEnum } from './model/types/user';
export type { UserSchema } from './model/types/userSchema';
