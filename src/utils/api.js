// 1. Configuraciones de la API (Afuera de los componentes para que sea global)
const API_KEY = import.meta.env.VITE_CLASH_ROYALE_API_KEY

export const API_CONFIG = {
    BASE_URL: 'https://proxy.royaleapi.dev/v1/cards',
    HEADERS: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
    }
};

// Limite por defecto, sino, se le pasa un limite
export async function obtenerCartas(limite = 35) {
    try {
        const response = await fetch(API_CONFIG.BASE_URL, {
            headers: API_CONFIG.HEADERS
        });
        const data = await response.json();
        
        // Actualizamos el estado con las primeras 35 cartas
        return data.items.slice(0, limite); 
    } catch(error) {
        console.log(error);
    }
}