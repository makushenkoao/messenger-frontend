export { type User, WhoCanViewEnum, type Setting } from './model/types/user';
export type { UserSchema } from './model/types/userSchema';
export { userReducer, userActions } from './model/slices/userSlice';
export { login } from './model/services/auth/login';
export { register } from './model/services/auth/register';
export { initAuthData } from './model/services/initAuthData/initAuthData';
export { resetPassword } from './model/services/resetPassword/resetPassword';
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
