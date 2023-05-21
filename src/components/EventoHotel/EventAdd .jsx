import { useState } from "react";
import Swal from "sweetalert2";
import { createEvent } from "./Api/EventoApi"
import { useNavigate } from "react-router-dom";



export const EventAdd = () =>{

    const navigate = useNavigate()
    const [event,setEvent] = useState('')
    const [eventType,setEventType] = useState('')
    const [date,setDate] = useState('')

    const imprimir = async(e)=>{
        e.preventDefault()

        const result = await createEvent(event, eventType,date)
        if (result) {
            Swal.fire({
            icon: 'success',
            title: "Genial",
            text: "Se ha agendado el evento correctamente",
            confirmButtonText: "Ok"
            }).then((r) => {
            if (r.isConfirmed) {
                navigate('/eventos');
            } else {
                navigate('/eventos');
            }
            });
        } 

    }

    return(<>
            <div className="container mt-5">
            <h1>Agenda evento en nuestro hotel </h1>
            <hr />
        
            <input
                type="text"
                placeholder="Nombre del evento"
                className="form-control mb-3"
                value={event}
                onChange={(e)=>setEvent(e.target.value)}
                
            />
            <input
        type="text"
        placeholder="Tipo de Evento"
        className="form-control mb-3"
        value={eventType}
        onChange={(e)=>setEventType(e.target.value)}
        />
        
            
        <input
        type="date"
        placeholder="Fecha"
        className="form-control mb-3"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        />
        
                <hr />
        
            <button className="btn btn-success p-3"onClick={imprimir} >
                agendar evento
            </button>
            
            </div>
            </> );
    
}

export default EventAdd