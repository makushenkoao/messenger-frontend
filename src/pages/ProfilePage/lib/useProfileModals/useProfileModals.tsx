import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';

export const useProfileModals = () => {
    const { nickname } = useParams();
    const [isOpenFollowers, setIsOpenFollowers] = useState(false);
    const [isOpenFollowing, setIsOpenFollowing] = useState(false);
    const [isOpenMore, setIsOpenMore] = useState(false);
    const [isOpenSettings, setIsOpenSettings] = useState(false);
    const [isCurrentUser, setIsCurrentUser] = useState(false);
    const user = useSelector(getUserAuthData);

    useEffect(() => {
        setIsCurrentUser(user.nickname === nickname);
    }, [user.nickname, nickname]);

    const handleOpenSettings = () => setIsOpenSettings(true);
    const handleCloseSettings = () => setIsOpenSettings(false);
    const handleOpenMore = () => setIsOpenMore(true);
    const handleCloseMore = () => setIsOpenMore(false);
    const handleOpenFollowers = () => setIsOpenFollowers(true);
    const handleCloseFollowers = () => setIsOpenFollowers(false);
    const handleOpenFollowing = () => setIsOpenFollowing(true);
    const handleCloseFollowing = () => setIsOpenFollowing(false);

    const handleFollow = () => {
        console.log('Follow to Profile');
    };

    return {
        isOpenFollowers,
        isOpenFollowing,
        isOpenMore,
        isOpenSettings,
        isCurrentUser,
        handleOpenSettings,
        handleCloseSettings,
        handleOpenMore,
        handleCloseMore,
        handleOpenFollowers,
        handleCloseFollowers,
        handleOpenFollowing,
        handleCloseFollowing,
        handleFollow,
    };
};
