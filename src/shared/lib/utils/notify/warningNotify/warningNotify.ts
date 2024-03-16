import { toast } from 'react-toastify';

export const warningNotify = (message: string) =>
    toast(message, {
        position: 'top-right',
        type: 'warning',
    });
