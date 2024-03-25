createHttpError = require('http-errors');
const axios = require('axios');
const AppointmentModel = require('./appointment');
const bcrypt = require('bcrypt');
const { version } = require('mongoose');


exports.register =  async (req, res, next) => {
    console.log("Try to create a appointment");
    try{
        const appointment_id = req.body.appointment_id;
        const date = req.body.date;
        const time = req.body.time;
        const doctor = req.body.doctor;
        const patient = req.body.patient;
        const description = req.body.description;
        const username = req.body.username;

        console.log(req.body);
        if(!appointment_id || !date || !time || !doctor || !patient || !description || !username){
            throw createHttpError.BadRequest('Missing required fields');
        }

        const isAppointmentExist = await AppointmentModel.findOne({appointment_id: appointment_id}).exec();

        if(isAppointmentExist){
            throw createHttpError(400, 'Appointment already exists');   
        }

        const newAppointment = new AppointmentModel({
            appointment_id: appointment_id,
            date: date,
            time: time,
            doctor: doctor,
            patient: patient,
            description: description,
            username: username
        });

        const result = await newAppointment.save();
        console.log("Appointment saved in database successfully!");
        

        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.update = async (req, res, next) => {
    console.log("Try to update a appointment");
    try{
        const appointment_id = req.body.appointment_id;
        const date = req.body.date;
        const time = req.body.time;
        const doctor = req.body.doctor;
        const patient = req.body.patient;
        const description = req.body.description;
        const username = req.body.username;

        if(!appointment_id || !date || !time || !doctor || !patient || !description || !username){
            throw createHttpError.BadRequest('Missing required fields');
        }

        const isAppointmentExist = await AppointmentModel.findOne({appointment_id: appointment_id}).exec();

        if(!isAppointmentExist){
            throw createHttpError(404, 'Appointment does not exist');   
        }

        const result = await AppointmentModel.updateOne({appointment_id: appointment_id}, req.body);
        console.log("Appointment updated in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    console.log("Try to delete a appointment");
    // check whether request is coming from frontend or testing
    console.log(req.body);

    console.log(req.body.appointment_id);
    try{
        const appointment_id =  req.body.appointment_id ;
        if(!appointment_id){
            res.status(400).send('Missing required fields');
            throw createHttpError.BadRequest('Missing required fields');
        }

        const isAppointmentExist = await AppointmentModel.findOne({appointment_id: appointment_id}).exec();

        if(!isAppointmentExist){
            throw createHttpError(404, 'Appointment does not exist');   
        }

        const result = await AppointmentModel.deleteOne({appointment_id: appointment_id});
        console.log("Appointment deleted from database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.getOne = async (req, res, next) => {
    console.log("Try to get one appointment");
    try{
        const appointment_id = req.params.appointment_id;
        if(!appointment_id){
            throw createHttpError.BadRequest('Missing required fields');
        }

        const result = await AppointmentModel.findOne({appointment_id: appointment_id}).exec();
        console.log("Appointment retrieved from database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.getAll = async (req, res, next) => {
    console.log("Try to get all appointments");
    try{
        const result = await AppointmentModel.find().exec();
        console.log("Appointments retrieved from database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

