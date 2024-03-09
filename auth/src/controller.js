const createHttpError = require('http-errors');
const UserModel = require('./user');
const bcrypt = require('bcrypt');

exports.register =  async (req, res, next) => {
    console.log("Try to create a user");
    const username = req.body.username;
    const usertype = req.body.usertype;
    const password = req.body.password;

    try{
        if(!username || !password || !usertype){
            throw createHttpError.BadRequest('Missing required fields');
        }
        const isUserExist = await UserModel.findOne({username: username}).exec();

        if(isUserExist)
            throw createHttpError(400, 'User already exists');

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            username: username,
            usertype: usertype,
            password: hashedPassword
        });

        const result = await newUser.save();
        console.log("User saved in database successfully!");
        res.status(201).send(result);

    }
    catch{
        console.log("error in creating a user");
        console.log(err);
        next(err);
    }
}
