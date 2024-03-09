createHttpError = require('http-errors');
const axios = require('axios');
const M_CenterModel = require('./m_center');
const bcrypt = require('bcrypt');


exports.register =  async (req, res, next) => {
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
    