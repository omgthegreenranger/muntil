const { User, Category, Event } = require('../models');
const sequelize = require('sequelize');
const router = require('express').Router();
const {calculateThresholdsDates, calculateThresholdBarPlots} = require ('../utils/index');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll({
            attributes: ['id', 'name', 'description', 'due_date', 'created_at', 'category_id', 'icon'],
            include: [{
                model: Category,
                attributes: ['id', 'name', 'type', 't1', 't2', 't3', 'icon']
            }],
        })
        const events = eventData.map((event) => event.get({ plain: true }));
        res.status(200).json(calculateThresholdBarPlots(events));
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/:id', async (req, res) => {
    try {
        const eventData = await Event.findByPk(req.params.id, {
            attributes: ['id', 'name', 'description', 'due_date', 'created_at'],
            include: [{
                model: Category,
                attributes: ['id', 'name', 'type', 't1', 't2', 't3']
            }]
        });
        const event = eventData.get({ plain: true });
        res.status(200).json(calculateThresholdsDates(event));
    } catch {
        res.status(500).json(err);
    }
}
);

module.exports = router;