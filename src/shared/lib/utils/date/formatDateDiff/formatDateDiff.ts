export function formatDateDiff(dateString: string): string {
    const date = new Date(dateString);
    const currentDate = new Date();
    const diffInMilliseconds = currentDate.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 60) {
        return `${diffInMinutes} minutes ago`;
    }
    if (diffInHours < 24) {
        return `${diffInHours} hours ago`;
    }
    if (diffInDays <= 7) {
        if (diffInDays === 1) {
            return 'Yesterday';
        }
        return `${diffInDays} days ago`;
    }
    const dayOfMonth = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${month} ${dayOfMonth}${year !== currentDate.getFullYear() ? `, ${year}` : ''}`;
}
