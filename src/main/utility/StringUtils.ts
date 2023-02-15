export const getStringWithoutSpecialCharacters = (str: string): string => {
    // only allow alphanumeric characters and hyphen
    return str.replace(/[^a-zA-Z0-9-]/g, "");
}
