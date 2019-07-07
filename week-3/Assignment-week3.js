const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('view engine', 'pug');

const router = require('./router.js');



app.use(router);

app.listen(3000);