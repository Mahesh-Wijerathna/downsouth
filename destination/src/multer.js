// multer single file upload

const multer = require('multer');

module.exports = function (req, res, next) {
    console.log("Inside multer.js");
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })

    const upload = multer({ storage: storage }).single('file');

    upload(req, res, function (err) {
        if (err) {
            console.log("Error in uploading file: ", err);
            return res.status(400).send('Error in uploading file');
        }
        console.log("File uploaded successfully");
        next();
    })
}


