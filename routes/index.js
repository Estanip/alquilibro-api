const { Router } = require('express');
const router = Router();

const usersRoutes = require('./users');
const authRoutes = require('./auth');
const bookRoutes = require('./books');

router.use('/api/auth', authRoutes);
router.use('/api/books', bookRoutes);

module.exports = router;