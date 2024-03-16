import { toast } from 'react-toastify';

export const infoNotify = (message: string) =>
    toast(message, {
        position: 'top-right',
        type: 'info',
    });
