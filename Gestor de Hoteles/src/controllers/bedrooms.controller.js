'use strict'

const Hotel = require('../models/hotel.model');
const Bedroom = require('../models/bedrooms.model');

//Crear Habitación
const createBedroom = async(req, res) =>{
    if(req.user.rol === 'ADMINAPP'){
        const {roomNumber, typeRoom, price, availability, available, hotelName} = req.body;
            try{
                let bedrooms = await Bedroom.findOne({roomNumber});
        
                if(bedrooms){
                    return res.status(400).send({
                        message: 'Habitación ya existente',
                        ok: false,
                        bedrooms: bedrooms
                    })
                };
                
                const hotel = await Hotel.findOne({name: hotelName});
                const hotelId = hotel ? hotel._id : null;

                //Crear el producto y lo asignaremos a la categoria correspondiente
                const bedroom = new Bedroom({
                    roomNumber,
                    typeRoom,
                    price,
                    availability,
                    available,
                    hotel: hotelId
                });
        
                //Si encontramos el hotel, agregamos mediante un ID las habitaciones en el modelo Hotel
                if(hotelId){
                    await Hotel.findByIdAndUpdate(
                        hotelId,
                        {$push: {bedrooms: bedroom._id}},
                        {new: true, useFindAndModify: false}
                    )
                };

                await bedroom.save();

                return res.status(201).json({
                    message: 'Habitación creado correctamente',
                    ok: true,
                    bedroom: bedroom,
                })
        
            }catch(error){
                console.log(error)
                res.status(500).json({
                    ok: false,
                    message: 'No se ha creado la habitación',
                    error: error,
                })
            }
        }else{
            return res.status(401).send({
                message: 'Solo AdminApp puede crear Habitaciones'
            })
    }
};

//Listar Habitación
const readBedroom = async(req, res) =>{
    try{
        const bedroom = await Bedroom.find();

        if(!bedroom){
            res.status(400).send({
                message: 'No existe la habitacion'
            })
        }else{
            res.status(200).json({
                'Habitaciones encontradas': bedroom
            })
        }
    }catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Hubo un error al buscar habitaciones'
        })
    }
};

//Editar Habitación
const updateBedroom = async(req, res) =>{
    if(req.user.rol === 'ADMINAPP'){
        try{
            const {id} = req.params;
            const bedroom = await Bedroom.findByIdAndUpdate(id, req.body, {new: true});
    
            if(!bedroom){
                return res.status(404).json({
                    message: 'Habitacion no existente'
                })
            }
            res.json(bedroom);
        }catch(error){
            console.log(error)
            res.status(200).json({
                message: 'Error en el servidor'
            })
        }
    }else{
        return res.status(200).send({
            message: 'AdminApp autorizado par aditar las habitaciones'
        })
    }
};

//Eliminar Habitación
const deleteBedroom = async(req, res) =>{
    if(req.user.rol === 'ADMINAPP'){
        try{
            const bedroomId = req.params.id;
            const deleteBedroom = await Bedroom.findByIdAndDelete(bedroomId);
    
            if(!deleteBedroom){
                return res.status(404).json({
                    message: 'La habitación no existe, no encontrado'
                })
            }
    
            const hotelId = deleteBedroom.hotel;
    
            const hotel = await Hotel.findById(hotelId);
    
            if(!hotel){
                res.status(404).json({
                    message: 'Hotel de la habitación no existente'
                });
            }
    
            hotel.bedrooms.pull(bedroomId);
            await hotel.save();
    
            res.json({message: 'Habitación eliminada'})
    
        }catch(error){
            console.log(error);
            res.status(500).json({
                message: 'Error al eliminar una Habitación'
            })
        }
    }else{
        return res.status(200).send({
            message: 'Solo AdminApp autorizado para eliminar las habitaciones'
        })
    }
}

module.exports = {  createBedroom,
                    readBedroom,
                    updateBedroom,
                    deleteBedroom};