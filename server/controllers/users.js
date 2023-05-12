const { User, Category, Event } = require('../models');
const sequelize = require('sequelize');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const response = await User.findAll({
            attributes:['id', 'first_name', 'last_name', 'email'],
        });
        res.send(response);
    } catch (err) {
        res.status(500).res.json(err);
    }
});

// Route for login.
// router.get('/:username', async (req,res) => {
//     try {
//         const loginData = await User.findOne(
//             {where: { username: req.params.username },

//             attributes: ['id', 'username', 'password']
//         });

//         res.status(200).json(loginData);
//         // res.render('login', loginData);

//     } catch (err) {
//         res.render('login');
//     }
// })

module.exports = router;