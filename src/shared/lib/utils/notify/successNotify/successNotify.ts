import { toast } from 'react-toastify';

export const successNotify = (message: string) =>
    toast(message, {
        position: 'top-right',
        type: 'success',
    });
