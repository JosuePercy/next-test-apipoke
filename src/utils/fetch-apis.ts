/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchGET = async (url: string): Promise<any> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}