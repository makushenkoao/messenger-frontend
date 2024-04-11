import { ProfileFollowers } from '../../modals/ProfileFollowers/ProfileFollowers';
import { ProfileFollowing } from '../../modals/ProfileFollowing/ProfileFollowing';
import { ProfileMoreModal } from '../../modals/ProfileMoreModal/ProfileMoreModal';
import { ProfileSettingsModal } from '../../modals/ProfileSettingsModal/ProfileSettingsModal';

interface ProfileModalsProps {
    isOpenMore: boolean;
    isOpenSettings: boolean;
    isOpenFollowers: boolean;
    isOpenFollowing: boolean;
    handleCloseMore: () => void;
    handleCloseSettings: () => void;
    handleCloseFollowers: () => void;
    handleCloseFollowing: () => void;
}

export const ProfileModals = (props: ProfileModalsProps) => {
    const {
        isOpenFollowers,
        isOpenFollowing,
        isOpenMore,
        isOpenSettings,
        handleCloseFollowing,
        handleCloseSettings,
        handleCloseMore,
        handleCloseFollowers,
    } = props;

    return (
        <>
            <ProfileMoreModal
                isOpen={isOpenMore}
                onClose={handleCloseMore}
            />
            <ProfileSettingsModal
                isOpen={isOpenSettings}
                onClose={handleCloseSettings}
            />
            <ProfileFollowers
                isOpen={isOpenFollowers}
                onClose={handleCloseFollowers}
            />
            <ProfileFollowing
                isOpen={isOpenFollowing}
                onClose={handleCloseFollowing}
            />
        </>
    );
};

export default ProfileModals;
