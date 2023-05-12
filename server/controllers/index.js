const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home.js');
const userRoutes = require ('./users.js');
const eventRoutes = require('./events.js');
const categoryRoutes = require ('./categories.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;