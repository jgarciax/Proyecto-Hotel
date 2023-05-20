import React, { useEffect, useState } from 'react';
import { listHotel } from "../api/HotelApi";
import { Hotel } from '../models/ModelHotel';

export const HotelComponent = () => {

    <listHotel />

    const [hotels, setHotels] = useState([]);
    const [hotel, setHotel] = useState(Hotel);
    const [showModal, setShowModal] = useState(false);

    const reload = async () => {
        const result = await listHotel();
        if(Array.isArray(result) && result.length > 0) {
            setHotels(result);
        }
    }

    const handleOpenModal = (u) => {
        setShowModal(true);
        setHotel(u);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    
    useEffect(() => {
        reload();
    }, [showModal]);

    return (
        <>
            <h1 className='text-decoration-underline'>Lista de Hoteles</h1>
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name Hotel</th>
                            <th>Dirección</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.map((u) => ( 
                            <tr key={u._id}>
                            <td>{u._id}</td>
                            <td>{u.namehotel}</td>
                            <td>{u.address}</td>
                            <td>
                                <button
                                    className='btn btn-warning'
                                    onClick={() => handleOpenModal(u)}
                                >
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HotelComponent