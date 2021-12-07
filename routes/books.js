const { Router } = require('express');
const router = Router();

const { getBookByIsbn } = require('../controllers/booksController/booksControllers');

router.get('/:isbn', getBookByIsbn);

module.exports = router;
