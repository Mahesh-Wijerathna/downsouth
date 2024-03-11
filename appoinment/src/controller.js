createHttpError = require('http-errors');
const axios = require('axios');
const AppointmentModel = require('./appointment');
const bcrypt = require('bcrypt');

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
        next(error