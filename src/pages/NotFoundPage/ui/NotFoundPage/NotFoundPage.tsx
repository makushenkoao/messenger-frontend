import { useNavigate } from 'react-router-dom';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className={cls.NotFoundPage}>
            <VStack
                gap="16"
                align="center"
            >
                <Text
                    title="Sorry, this page isn't available."
                    text="The link you followed may be broken, or the page may have been removed."
                    bold
                    align="center"
                />
                <Button onClick={handleBack}>Go Back to Messenger</Button>
            </VStack>
        </div>
    );
};
export default NotFoundPage;
