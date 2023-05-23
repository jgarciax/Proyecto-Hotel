import React, { useEffect, useState } from 'react'
import axios from 'axios'   
import  '../component/ListUser.css'

export const ListUser = () => {
        
    const [lista, setLista] = useState([])
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token)
        const getUsuarios = async () => {
            const res = await axios.get("http://localhost:3010/api/read-user", {
                headers: {
                "x-token": `${token}`,
                },
            });
            setLista(res.data)
        }
        getUsuarios();
    }, [lista])
    console.log(lista)
    
    return (
        <div className='row'>
            {
                lista.map(list => (
                    <div className='col-md-4 p-2' key={list._id}>
                        <div className='card'>
                            <div className='card-header'>
                                <h5>Nombre: { list.name } </h5>
                            </div>

                            <div className='card-body'>
                                <p>Correo: {list.email}</p>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListUser