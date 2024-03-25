require('dotenv').config();
const axios = require('axios');
console.clear();
console.log("Hello World From Test.js");
console.log("======================== \n");
console.log("Base URL"+process.env.REACT_APP_APPOINTMENT_URL+ "\n");

//_Test => Base URL
async function Base() {
    console.log("/_Test => Base URL\n");
    try {
        const response = await axios.get(`${process.env.REACT_APP_APPOINTMENT_URL}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    console.log("Base URL Test Finished ");
    console.log("********************** \n");
}

//_Test => Get one with appointment_id
async function getOneAppointment() {
    console.log("=>Test => Get one with appointment_id");
    console.log("*************************************");
    try {
        const response = await axios.get(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment/dev_id`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    console.log("Get one with appointment_id Test Finished");
    console.log("***************************************** \n");
}

//_Test => Get all appointments
async function getAllAppointments() {
    console.log("/_Test => Get all appointments\n");
    try {
        const response = await axios.get(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment`);
        //console.log(response.data);
        console.log("all came")
    } catch (error) {
        console.error(error);
    }
    console.log("Get all appointments Test Finished \n\n");
}

//_Test => Create a appointment
async function createAppointment() {
    console.log("Test => Create a appointment\n");
    console.log("****************************");
    try {
        const response = await axios.post(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment`, {
            appointment_id: 'dev_id',
            date: '2024-03-26',
            time: '21:56',
            doctor: 'hh',
            patient: 'hh',
            description: 'hh',
            username: 'hh'
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    console.log("Finished => Appointment Create");
    console.log("****************************** \n");
    

}

//_Test => Update a appointment
async function updateAppointment() {
    console.log("Test => Update a appointment");
    console.log("****************************");
    
    const appointmentData = {
        appointment_id: "dev_id",
        date: "2021-09-01",
        time: "10:00",
        doctor: "Dr. Smith",
        patient: "sample patient",
        description: "Checkup",
        username: "user1"
    };

    try {
        const response = await axios.put(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment/`, appointmentData, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log('Appointment updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating appointment:', error);
    }
    console.log("Finished => Appointment Update");
    console.log("****************************** \n");
}

//_Test => Delete a appointment
async function deleteAppointment() {
    console.log("Test => Delete a appointment");
    console.log("****************************");
    
    const appointmentData = {
        appointment_id: "dev_id"
    };

    try {
        const response = await axios.delete(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment/`, { data: appointmentData });
        console.log('Appointment deleted successfully:', response.data);
    } catch (error) {
        console.error('Error deleting appointment:', error);
    }
    console.log("Finished => Appointment Delete");
    console.log("****************************** \n");
}



async function RUN_ALL () {
    await Base();

    await getAllAppointments();
    await createAppointment();
    await updateAppointment();
    await deleteAppointment();
}

RUN_ALL();




