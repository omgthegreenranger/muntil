const { User, Category, Event, Settings } = require('../models');
const sequelize = require('sequelize');
const router = require('express').Router();

router.get('/', async (req, res) => {
    // if (!req.session.loggedIn) {
    //     return res.render('homepage');
    // }
    try {
        const eventData = await Event.findAll({
            attributes:['id', 'name', 'description', 'due_date'],
            where: {
                id: req.session.userId
            },
            include: [{
                model: Category,
                attributes: ['name', 'type', 'T1', 'T2', 'T3']
            }]
        });
        const events = eventData.map((event) => event.get({ plain: true }));
        res.render('homepage', { events, loggedIn: req.session.loggedIn, userId: req.session.userId, firstName: req.session.firstName });  
    } catch (err) {
        res.render('homepage');
    }
});

module.exports = router;