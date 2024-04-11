import { MONTHS } from '../consts/months';

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const month = MONTHS[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day < 10 ? `0${day}` : day}, ${year}`;
}
