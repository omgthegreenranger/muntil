const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home.js');
const userRoutes = require ('./users.js');
const eventRoutes = require('./event.js');
const categoryRoutes = require ('./category.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;