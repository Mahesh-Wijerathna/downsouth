const createHttpError = require('http-errors');
const axios = require('axios');
const TouristModel = require('./tourist');
const bcrypt = require('bcrypt');


exports.register_v1 =  async (req, res, next) => {
    console.log("Try to create a tourist");
    try{
        const username = req.body.username;
        const usertype = req.body.usertype;
        //const { image } = req.files;
        const password = req.body.password;

        // if(!image){
        //     throw createHttpError.BadRequest('Missing image');
        // }
        // if(!image.mimetype.startsWith('image')){
        //     throw createHttpError.BadRequest('File uploaded is not an image');
        // }
        // let filepath = `${__dirname}/public/uploads/${image.name}`;
        // image.mv(filepath);

        // let file_path_to_upload = 'public/profile_photos/' + image.name;


        if(!username || !password || !usertype){
            throw createHttpError.BadRequest('Missing required fields');
        }
        const isTouristExist = await TouristModel.findOne({username: username}).exec();
        if(isTouristExist){
            throw createHttpError(400, 'Tourist already exists');   
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const newTourist = new TouristModel({
            username: username,
            //Image: file_path_to_upload,
            password: hashedPassword
        });
        const result = await newTourist.save();
                //* axios sample post 
                axios.post('http://localhost:4001/api/v1/auth', {
                    username: username,
                    usertype: 'tourist',
                    password: password
                })
                .then((res) => {
                    console.log(`statusCode: ${res.statusCode}`)
                    console.log(res)
                })
                .catch((error) => {
                    console.error(error)
                })

        console.log("Tourist saved in database successfully!");
        res.status(201).send(result);


    }
    catch(err){
        console.log("error in creating a tourist");
        console.log(err);
        next(err);
    }
    finally{
        res.end();
    }}

exports.register = async (req, res, next) => {
    console.log("Try to create a tourist");
    try{
        const name = req.body.name;
        const username = req.body.username;
        const country = req.body.country;
        const phone_number = req.body.phone_number;
        const password = req.body.password;

        if(!name || !username || !country || !phone_number || !password){
            throw createHttpError.BadRequest('Missing required fields');
        }
        const isTouristExist = await TouristModel.findOne({username: username}).exec();
        if(isTouristExist){
            throw createHttpError(400, 'Tourist already exists');   
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newTourist = new TouristModel({
            name: name,
            username: username,
            country: country,
            phone_number: phone_number,
            password: hashedPassword
        });
        const result = await newTourist.save();

              await axios.post('http://localhost:4001/api/v1/auth', {
                username: username,
                usertype: 'tourist',
                password: password
            })
            .then((res) => {
                console.log(`statusCode: ${res.statusCode}`)
                console.log(res)
            })
            .catch((error) => {
                console.error(error)
            })
        console.log("Tourist saved in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.update = async (req, res, next) => {
    console.log("Try to update a tourist");
    try{
        const username = req.body.username;
        const name = req.body.name;
        const country = req.body.country;
        const phone_number = req.body.phone_number;
        const password = req.body.password;
        if(!username || !name || !country || !phone_number || !password){
            throw createHttpError.BadRequest('Missing required fields');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await TouristModel.findOneAndUpdate({username: username}, {name: name, country: country, phone_number: phone_number}, {new: true});
            await axios.put('http://localhost:4001/api/v1/auth', {
                username: username,
                usertype: 'tourist',
                password: password
            })
            .then((res) => {
                console.log(`statusCode: ${res.statusCode}`)
                console.log(res)
            })
            .catch((error) => {
                console.error(error)
            })


        console.log("Tourist updated in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    console.log("Try to delete a tourist");
    try{
        const username = req.body.username;
        if(!username){
            throw createHttpError.BadRequest('Missing required fields');
        }
        const result = await TouristModel.findOneAndDelete({username: username});
        await axios.delete('http://localhost:4001/api/v1/auth', {
            username: username,
            usertype: 'tourist'
        })
        .then((res) => {
            console.log(`statusCode: ${res.statusCode}`)
            console.log(res)
        })
        .catch((error) => {
            console.error(error)
        })
        console.log("Tourist deleted in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}
        
