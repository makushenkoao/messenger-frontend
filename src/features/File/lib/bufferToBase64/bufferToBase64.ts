interface bufferToBase64Options {
    returnDataURL: boolean;
}

export function bufferToBase64(
    buffer: number[],
    options: bufferToBase64Options,
) {
    const { returnDataURL = false } = options;

    const base64String = btoa(String.fromCharCode(...new Uint8Array(buffer)));

    return returnDataURL
        ? `data:image/png;base64,${base64String}`
        : base64String;
}
