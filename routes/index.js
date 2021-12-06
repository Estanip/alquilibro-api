const { Router } = require('express');
const router = Router();

const usersRoutes = require('./users');
const authRoutes = require('./auth');

router.use('/auth', authRoutes);
router.get('/users', usersRoutes);

module.exports = router;