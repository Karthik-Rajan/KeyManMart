const express = require('express');
const cors = require('cors');
require('dotenv').config();
const consumerApi = require('./router/consumerApi');
const clientApi = require('./router/clientApi');
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: ['localhost:3000', 'localhost:4000'],
  optionsSuccessStatus: 200
};
const app = express();
app.use(cors(corsOptions));
app.use('/assets', express.static('assets'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(consumerApi);
app.use('/admin',clientApi);


app.listen(port , () => {
    console.log('server connected in port: ' + port);
});