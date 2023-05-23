const { User, Category, Event } = require('../../models');
const sequelize = require('sequelize');
const router = require('express').Router();
const moment = require('moment');
// const withAuth = require('../../utils/auth');


router.post('/', async (req, res) => {
  try {
      const eventData = await Event.create({
        name: req.body.name,
        description: req.body.description,
        due_date: req.body.due_date,
        location: "",
        category_id: req.body.category_id
      })
      .then((data) => {
      eventData = data.get({plain: true});
      res.send(eventData)
    })
  }
  catch (error) {
      res.send(error)
  }
});
  
  router.put('/:id', async (req, res) => {
    try {
      const eventUpdate = await Event.update({
          name: req.body.name,
          description: req.body.description,
          due_date: req.body.due_date,
          location: "",
          category_id: req.body.category_id,
      },{
        where: {
          id: req.params.id
        },
      })
      res.json(eventUpdate)
    } catch (err) {
      res.status(500).json(err);
    }
  })
  
  router.delete('/:id', async (req, res) => {
  
    try {
      Event.destroy({
        where: {
          id: req.params.id
        }
      }    );
      res.status(200).end();
    } catch {
      res.status(500).json(err);
    }
  })

  module.exports = router;
