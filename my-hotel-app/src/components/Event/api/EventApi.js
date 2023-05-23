import axios from 'axios'
const URL = 'http://localhost:3010/api/'

export const listEvent = async () => {
    try{
        const result = await axios.get(`${URL}read-event`);
        console.log(result)
        if(result.data && Array.isArray(result.data['Eventos encontrados'])){
            return result.data['Eventos encontrados'];
        }else {
            console.error("La respuesta no contiene la matriz de eventos:", result.data);
            return [];
        }
    }catch (error) {
        console.error("Error al obtener la lista de eventos:", error)
        return [];
    }
}