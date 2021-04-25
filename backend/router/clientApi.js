const express = require('express');
const route = express.Router();

// file upload
// const multer = require('multer');
// const storage = multer.diskStorage({
//      destination: (req,file,cb) => {
//          cb(null, 'assets/images')
//      },
//      filename: (req, file, cb) => {
//         cb(null, Date.now() + file.originalname)
//     }
// }); 

// const upload = multer({ storage: storage });

const authController = require('../controllers/admin/authController');
route.post('/register', authController.register)
     .post('/login', authController.login);

module.exports = route;
