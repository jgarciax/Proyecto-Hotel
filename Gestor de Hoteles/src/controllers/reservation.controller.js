'use strict'

const Reservation = require('../models/reservation.model');

//Buscar las reservaciones hechas por los usuarios
const Bookings = async(req, res) => {
    if(req.user.rol === 'ADMINHOTEL'){
        try{
            const reservations = await Reservation.find();
    
            return res.json(reservations)
        }catch(error){
            console.log(error)
            res.status(500).json({
                ok: false,
                message: 'No se encontro las reservaciones'
            })
        }
    }else{
        return res.status(401).send({
            message: 'Solo AdminHotel puede ver las reservaciones'
        })
    }
}

//Crear una reservación
const CreateReservation = async(req, res) => {
        const reservation = new Reservation({
            user: req.body.user,
            bedrooms: req.body.bedrooms,
            servicios: req.body.servicios,
            Hotel: req.body.Hotel
        });
    try{
        const newReservation = await reservation.save();
        res.status(201).json({
            message: 'La reservacion ha sido creada exitosamente.',
            newReservation
        });

    }catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Error al crear Reservación'
        })
    }
}

//Cancelar una reservación
const CancelReservation = async(req, res) => {
    try{
        const reservationId = req.params.id;
        const reservation = await Reservation.findById(reservationId);

        if(!reservation) {
            res.status(404).json({
                message: 'No se encontró la reservación'
            });
            return;
        }

        await Reservation.deleteOne({
            _id: reservationId
        });
        
        res.json({
            ok: true,
            message: 'Reservación cancelada'
        });

    }catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Error al cancelar la reservación'
        })
    }
}

//Buscar una reservación por id
const ReservationId = async(req, res, next) => {
    if(req.user.rol === 'ADMINHOTEL') {
        try{
            const resevation = await Reservation.findById(req.params.id);
            
            if(!resevation){
                return res.status(404).json({
                    message: 'No se encontro la reservación'
                });
            }
            res.reservation = resevation;
            next();
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: 'Error al buscar por id la reservación'
            })
        }
    }else{
        return res.status(401).send({
            message: 'Solo AdminHotel puede realizar esta opción'
        })
    }
}

module.exports = {  Bookings,
                    CreateReservation, 
                    CancelReservation, 
                    ReservationId}