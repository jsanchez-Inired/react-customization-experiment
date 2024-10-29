const baseURLConfig = "http://localhost:10000/";

export async function request_to_config(controller: string, endpoint: string, params?: any, body?: any) {
    const url = new URL(baseURLConfig + controller + "/" + endpoint);
    Object.keys(params).forEach(key => {
        url.searchParams.append(key, params[key]);
    });

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la petición');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}