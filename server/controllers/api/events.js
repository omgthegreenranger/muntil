const { User, Category, Event } = require('../../models');
const sequelize = require('sequelize');
const router = require('express').Router();
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
      const eventData = await Event.create({
        name: req.body.name,
        description: req.body.description,
        due_date: req.body.due_date,
        location: "",
        category_id: req.body.category_id,
        user_id: req.session.userId
      });
      eventData = eventData.get({plain: true});
      res.send(eventData)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.put('/:id', withAuth, async (req, res) => {
    try {
      console.log(req.body);
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
      res.send(eventUpdate)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })
  
  router.delete('/:id', withAuth, async (req, res) => {
  
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
