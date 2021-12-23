/* 
    Rutas de Usuario / Users
    host + api/users
*/

const { Router } = require('express');
const { getUserBooks } = require('../controllers/userControllers/userControllers');
const router = Router();

// BUSCA LOS LIBROS SUBIDOS POR EL USUARIO
router.get('/books', getUserBooks);


module.exports = router;