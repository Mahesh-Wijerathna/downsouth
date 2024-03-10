const axios = require('axios');


module.exports = async function (req, res, next) {
    console.log("Inside verifyToken.js");
    //return next();
    const token = req.query.token || req.headers['x-access-token'];
     console.log("Token: ", token);

    if (!token) {
        res.status(401).send('Token not provided');
    }
// console.log("JWT Token Key : " , process.env.JWT_TOKEN);

    try {
        console.log("Try to call auth service to verify token");
        await axios.get(`http://localhost:4001/api/v1/auth/verifytoken?token=${token}`, {
            token: token
        })
        .then((res) => {
            console.log("Response from auth service: ");
            console.log(`statusCode: ${res.statusCode}`)
            console.log(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
        
        //req.user = decoded;
        return next();
    } catch (error) {
        console.log(error);
        res.status(400).send('Invalid token -cc');
    }


}