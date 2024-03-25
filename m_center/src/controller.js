createHttpError = require('http-errors');
const axios = require('axios');
const M_CenterModel = require('./m_center');
const bcrypt = require('bcrypt');


exports.register_v1 =  async (req, res, next) => {
    console.log("Try to create a m_center");
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

        const isM_CenterExist = await M_CenterModel.findOne.username({username: username}).exec();

        if(isM_CenterExist){
            throw createHttpError(400, 'M_Center already exists');   
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newM_Center = new M_CenterModel({ 
            username: username,
            //Image: file_path_to_upload,
            password: hashedPassword
        });
        const result = await newM_Center.save();
                //* axios sample post 
                axios.post('http://localhost:4001/api/v1/auth', {
                    username: username,
                    usertype: 'm_center',
                    password: password
                })
                .then((res) => {
                    console.log(`statusCode: ${res.statusCode}`)
                    console.log(res)
                })
                .catch((error) => {
                    console.error(error)
                })

        console.log("M_Center saved in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.register_v2 = async (req, res, next) => {
    console.log("Try to create a m_center");
    try{
        const name = req.body.name;
        const longitude = req.body.longitude;
        const latitude = req.body.latitude;
        const destination = req.body.destination;
        const username = req.body.username;
        const password = req.body.password;
        
        
        

        if(!name || !longitude || !latitude || !destination || !username || !password){
            throw createHttpError.BadRequest('Missing required fields');
        }

        const isM_CenterExist = await M_CenterModel.findOne({username: username}).exec();

        if(isM_CenterExist){
            throw createHttpError(400, 'M_Center already exists');   
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newM_Center = new M_CenterModel({
            name: name,
            longitude: longitude,
            latitude: latitude,
            destination: destination,
            username: username,
            password: hashedPassword
        });
        const result = await newM_Center.save();
                axios.post('http://localhost:4001/api/v1/auth', {
                    username: username,
                    usertype: 'm_center',
                    password: password
                })
                .then((res) => {
                    console.log(`statusCode: ${res.statusCode}`)
                    console.log(res)
                })
                .catch((error) => {
                    console.error(error)
                })

        console.log("M_Center saved in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.register = async (req, res, next) => {
    console.log("Try to create a m_center");
    try{
        const name = req.body.name;
        const longitude = req.body.longitude;
        const latitude = req.body.latitude;
        const destination = req.body.destination;
        const phone_number = req.body.phone_number;
        const owner_name = req.body.owner_name;
        const description = req.body.description;
        const username = req.body.username;
        const password = req.body.password;

      
        

        if(!name  || !destination || !phone_number || !owner_name || !description || !username || !password){
            throw createHttpError.BadRequest('Missing required fields');
        }

        const isM_CenterExist = await M_CenterModel.findOne({username: username}).exec();

        if(isM_CenterExist){
            throw createHttpError(400, 'M_Center already exists');   
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newM_Center = new M_CenterModel({
            name: name,
            longitude: longitude,
            latitude: latitude,
            destination: destination,
            phone_number: phone_number,
            owner_name: owner_name,
            description: description,
            username: username,
            
        });

        const result = await newM_Center.save();

                axios.post('http://localhost:4001/api/v1/auth', {
                    username: username,
                    usertype: 'm_center',
                    password: password
                })
                .then((res) => {
                    console.log(`statusCode: ${res.statusCode}`)
                    console.log(res)
                })
                .catch((error) => {
                    console.error(error)
                })
            
        console.log("M_Center saved in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.update = async (req, res, next) => {
    console.log("Try to update a m_center");
    try{
        const id = req.params.id;
        const name = req.body.name;
        const longitude = req.body.longitude;
        const latitude = req.body.latitude;
        const destination = req.body.destination;
        const phone_number = req.body.phone_number;
        const owner_name = req.body.owner_name;
        const description = req.body.description;
        const username = req.body.username;
        const password = req.body.password;

        if(!name || !longitude || !latitude || !destination || !phone_number || !owner_name || !description || !username || !password){
            throw createHttpError.BadRequest('Missing required fields');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await M_CenterModel.findByIdAndUpdate(id, {
            name: name,
            longitude: longitude,
            latitude: latitude,
            destination: destination,
            phone_number: phone_number,
            owner_name: owner_name,
            description: description,
            username: username,
            
        }, {new: true}).exec();

            await axios.put('http://localhost:4001/api/v1/auth', {
                username: username,
                usertype: 'm_center',
                password: password
            })
            .then((res) => {
                console.log(`statusCode: ${res.statusCode}`)
                console.log(res)
            })
            .catch((error) => {
                console.error(error)
            })

        if(!result){
            throw createHttpError.NotFound('M_Center does not exist');
        }
        console.log("M_Center updated successfully!");
        res.status(200).send(result);
    }
    catch(error){
        next(error);
    }
}
   
exports.delete = async (req, res, next) => {
    console.log("Try to delete a m_center");
    try{
        const id = req.params.id;
        const result = await M_CenterModel.findByIdAndDelete(id).exec();
                await axios.delete('http://localhost:4001/api/v1/auth', {
                    username: username,
                    usertype: 'm_center',
                    password: password
                })
                .then((res) => {
                    console.log(`statusCode: ${res.statusCode}`)
                    console.log(res)
                })
                .catch((error) => {
                    console.error(error)
                })
        if(!result){
            throw createHttpError.NotFound('M_Center does not exist');
        }
        console.log("M_Center deleted successfully!");
        res.status(200).send(result);
    }
    catch(error){
        next(error);
    }
}
        
        
        


exports.search_by_destination = async (req, res, next) => {
    try{
        let destination = req.query.destination;
        if(!destination){
            destination = ""
        }
         result = await M_CenterModel.find({ destination: { $regex: destination, $options: 'i' } }).exec();
        if(!result){
            throw createHttpError.NotFound('No M_Center found');
        }
        res.status(200).send(result);

    }
    catch(error){
        next(error);
    }
}


exports.search_by_radius = async (req, res, next) => {
    try{
        let longitude = req.query.longitude;
        let latitude = req.query.latitude;
        let radius = req.query.radius;
        if(!longitude || !latitude || !radius){
            throw createHttpError.BadRequest('Missing required fields');
        }
        const searchCenter = { type: "Point", coordinates: [longitude, latitude] };
        const query = {
            location: {
              $geoWithin: {
                $centerSphere: [searchCenter, radius / 6371] // Convert k meters to radians
              }
            }
          };
        result = await M_CenterModel.find(query).exec();
        if(!result){
            throw createHttpError.NotFound('No M_Center found');
        }
        res.status(200).send(result);
    }
    catch(error){
        next(error);
    }
}
/*************************************

async function findLocationsInRadius(longitude, latitude, radiusInMeters) {
  try {
    const searchCenter = { type: "Point", coordinates: [longitude, latitude] };
    const query = {
      location: {
        $geoWithin: {
          $centerSphere: [searchCenter, radiusInMeters / 6371000] // Convert meters to radians
        }
      }
    };
    const locations = await Location.find(query);
    console.log(locations); // Or return locations for further processing
  } catch (err) {
    console.error('Error fetching locations:', err);
  }


*******************************************/