import { toast } from 'react-toastify';

export const errorNotify = (message: string) =>
    toast(message, {
        position: 'top-right',
        type: 'error',
    });
