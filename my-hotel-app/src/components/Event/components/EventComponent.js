import React, { useEffect, useState } from 'react'
import { listEvent } from '../api/EventApi'

export const EventComponent = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEvent = async () => {
        try{
            const res = await listEvent();
            if(Array.isArray(res)) {
              setEvents(res)
          }else {
            console.error('Los datos devueltos no son un array:', res)
          }
        }catch (error) {
            console.error('Erro en event:', error)
          }
      }
      fetchEvent();
  }, [])

  const handleSearchTermChange = (u) => {
    setSearchTerm(u.target.value);
  };

  const filteredEvent = events.filter((even) => {
    const { event } = even;
    const searchQuery = searchTerm.toLocaleLowerCase();
    return event.toLocaleLowerCase().includes(searchQuery)
  });

  const renderEventCards = () => {
      return filteredEvent.map((even) =>(
        <div className="col-md-4 mb-4 animate_animated animate_fadeIn" key={even._id}>
          <div className="card">
            <div className='card-body'>
                <p className="card-text">Evento: {even.event}</p>
                <p className='cart-text'>Tipo de evento: {even.eventType}</p>
                <p className='card-text'>Fecha: {even.date}</p>
            </div>
          </div>
        </div>
      ));
  }

  return (
    <>
    <div className='jumbotron'>
      <div className='container'>
        <div className='display-4'>Lista de Eventos</div>
        <hr className='my-4'/>
        <div className='input-group mb-4'>
            <input 
            type="text"
            className='form-control'
            placeholder='Buscar Evento'
            value={searchTerm}
            onChange={handleSearchTermChange}
            />
            <div className='input-group-append'>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row mt-4'>
        {renderEventCards()}
      </div>
    </div>
    </>
  )
}

export default EventComponent