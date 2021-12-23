const { Router } = require('express');
const router = Router();

const { getBookByIsbn, uploadBook } = require('../controllers/booksController/booksControllers');

// BUSCAR LIBRO POR ISBN EN API GOOGLE
router.get('/:isbn', getBookByIsbn);

// CREAR LIBRO (SUBIR LIBRO)
router.post('/upload', uploadBook);

module.exports = router;
