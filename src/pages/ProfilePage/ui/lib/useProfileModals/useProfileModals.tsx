import { useState } from 'react';

export const useProfileModals = () => {
    const [isOpenFollowers, setIsOpenFollowers] = useState(false);
    const [isOpenFollowing, setIsOpenFollowing] = useState(false);
    const [isOpenMore, setIsOpenMore] = useState(false);
    const [isOpenSettings, setIsOpenSettings] = useState(false);
    const [isCurrentUser, setIsCurrentUser] = useState(true);

    const handleOpenSettings = () => setIsOpenSettings(true);
    const handleCloseSettings = () => setIsOpenSettings(false);
    const handleOpenMore = () => setIsOpenMore(true);
    const handleCloseMore = () => setIsOpenMore(false);
    const handleOpenFollowers = () => setIsOpenFollowers(true);
    const handleCloseFollowers = () => setIsOpenFollowers(false);
    const handleOpenFollowing = () => setIsOpenFollowing(true);
    const handleCloseFollowing = () => setIsOpenFollowing(false);

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
    };
};
