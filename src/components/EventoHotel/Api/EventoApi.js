import axios from "axios"
import Swal from "sweetalert2"

const URL = "http://localhost:3010/api/"
export const createEvent = async(event,eventType,date,hotel)=>{
    try{
        const Events = {
            event,
            eventType,
            date, 
            hotel
        }
        const response = await axios.post(`${URL}create-event`, Events)
        return response.data
    }catch(e){
        Swal.fire({
            icon: 'error',
            title: "Error",
            text: "al parecer esa fecha ya esta agendada",
            confirmButtonText: "Ok"
        });
    }
}