const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const dayjs = require('dayjs');
const cors = require('cors')


const app = express(); //Line 2
const port = process.env.PORT || 5000; 


app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});