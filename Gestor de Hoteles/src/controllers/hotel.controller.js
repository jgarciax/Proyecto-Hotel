'use strict'

const Hotel = require('../models/hotel.model');
const User = require('../models/user.model');

//Crear Hotel
const createHotel = async(req, res) =>{
    if(req.user.rol === 'ADMINAPP'){
     const {namehotel, address, admin} = req.body;
         try{
             let hotel = await Hotel.findOne({namehotel});
 
             if(hotel){
                 return res.status(400).send({
                     message: 'Hotel existente',
                     ok: false,
                     hotel: hotel,
                 });
             }
 
             const userSearch = await User.findById(admin);
 
             if(!userSearch){
                 return res.status(400).json({
                     message: 'No se encontro el usuario',
                     ok: false,
                     user: userSearch
                 })
             }
 
             const newHotel = await Hotel.create({namehotel, address, admin});
 
             userSearch.Hotel = newHotel._id;
             await userSearch.save();
 
             res.status(200).send({
                 message: 'Hotel creado correctamente',
                 ok: true,
                 hotel: newHotel,
             })

         }catch(error){
             console.log(error)
             res.status(500).json({
                 ok: false,
                 message: 'No se ha creado aun el Hotel',
                 error: error,
             })
         }
    }else{
        return res.status(500).send({
             message: 'Solo AdminApp puede agregar hoteles'
         })
    }
}

//Listar Hotel
const readHotel = async(req, res) =>{
    try{
        const hoteles = await Hotel.find();

        if(!hoteles){
            res.status(404).send({
                message: 'No hay Hoteles'
            });
        }else{
            res.status(200).json({'Hoteles encontrados': hoteles})
        }

    }catch(error){
        throw new Error(error);
    }
}

//Editar Hotel
const updateHotel = async(req, res)=>{
   if(req.user.rol === 'ADMINAPP'){
        try{
            const {id} = req.params;
            const hotel = await Hotel.findOneAndUpdate(id, req.body, {new: true});
            
            if(!hotel){
                return res.status(404).json({
                    message: 'Hotel no existente'
                });
            } 
            
            res.json(hotel);
        }catch(error){
            console.log(error)
            res.status(error).json({
                message: 'Error en el server'
            });
        }
   }else{
    return res.status(500).send({
            message: 'Solo AdminApp puede editar el hotel'
        })
   }
} 

//Eliminar Hotel
const deleteHotel = async(req, res) =>{
    if(req.user.rol === 'ADMINAPP'){
        try{
            const hotelId = req.params.id;
    
            //Buscar el hotel por medio del ID y obtener los eventos que tiene este Hotel
            const hotel = await Hotel.findById(hotelId).populate('events');
            const eventos = hotel.events;//El evento viene del modelo hotel
    
            if(eventos.length > 0){
                //Buscar hotel por default
                let defaultHotel = await Hotel.findOne({namehotel: 'default'});
    
                //Si no existe el hotel, se va crear uno
                if(!defaultHotel){
                    const newDefault = new Hotel({
                        namehotel: 'default',
                        address: '18 calle zona 1',
                        bedrooms: bedrooms.map((bedroom) => bedroom._id),

                    });
    
                    defaultHotel = await newDefault.save();
                }else{
                    defaultHotel.eventos.push(...eventos.map((eventos) =>eventos._id));
    
                    await defaultHotel.save();
                }
    
                const promises = eventos.map(async(eventos) =>{
                    eventos.hotel = defaultHotel._id;
                    await eventos.save();
                })
                await Promise.all(promises); 
            }
    
                await Hotel.findByIdAndDelete(hotelId);
    
                res.json({
                    message: 'Hotel eliminado correctamente'
                });
    
        }catch(error){
            console.log(error);
            res.status(500).send({
                message: 'Error al eliminar Hotel'
            })
        }
    }else{
        return res.status(500).send({
            message: 'Solo AdminApp puede eliminar el hotel'
        })
    }
};

module.exports = {  createHotel,
                    readHotel,
                    updateHotel,
                    deleteHotel};