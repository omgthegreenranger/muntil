const router = require('express').Router();
const eventRoutes = require('./events.js');




router.use('/events', eventRoutes);
// router.use('/categories', categoryRoutes);

module.exports = router;