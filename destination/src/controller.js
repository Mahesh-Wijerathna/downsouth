createHttpError = require('http-errors');
const axios  = require('axios');
const DestinationModel = require('./destination');
const bcrypt = require('bcrypt');


exports.register_v1 =  async (req, res, next) => {
    console.log("Try to create a destination");
    try{
        const username = req.body.username;
        const usertype = req.body.usertype;
        const password = req.body.password;

        if(!username || !password || !usertype){
            throw createHttpError.BadRequest('Missing required fields');
        }

        const isDestinationExist = await DestinationModel.findOne.username({username: username}).exec();

        if(isDestinationExist){
            throw createHttpError(400, 'Destination already exists');   
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newDestination = new DestinationModel({ 
            username: username,
            password: hashedPassword
        });
        const result = await newDestination.save();
           
                

        console.log("Destination saved in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}
exports.register = async (req, res, next) => {
    console.log("Try to create a destination");
    try{
        const name = req.body.name;
        if(!name){
            throw createHttpError.BadRequest('Missing required fields');
        }
        const newDestination = new DestinationModel({ 
            name: name
        });
        const result = await newDestination.save();
        console.log("Destination saved in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}


exports.search_by_name = async (req, res, next) => {
    console.log("Try to search a destination by name");
    try{
        let name = req.query.name;
        if(!name){
            name = '';
        }
        const destination = await DestinationModel.find({name: {$regex: name, $options: 'i'}}).exec();

        if(!destination){
            throw createHttpError.NotFound('Destination not found');
        }
        res.status(200).send(destination);

        
    }
    catch(error){
        next(error);
    }
}
