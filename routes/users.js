/* 
    Rutas de Usuario / Users
    host + api/users
*/
const { Router } = require('express');
const router = Router();
const upload = require("../helpers/multer");

const { uploadImage } = require('../controllers/userControllers/imageController');
const { getUserBooks } = require('../controllers/userControllers/userControllers');

// BUSCA LOS LIBROS SUBIDOS POR EL USUARIO
router.get('/books', getUserBooks);

// SUBIR IMAGEN DE PERFIL
router.post('/upload-image', upload.single('image'), uploadImage);

module.exports = router;