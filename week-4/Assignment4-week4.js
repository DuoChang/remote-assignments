const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// app.set('view engine', 'pug');



const mysql = require('mysql');

/*--連線sql並新建DB & Table--*/

var assignmentsql = mysql.createConnection({

	host:'localhost',
	port:'3306',
	user:'root',
	password:'pega@duo0707',
	database:'assignment'

});

assignmentsql.connect(function(err){
	if(err) throw err;
	console.log("Connected");
});


/*--新建DB & table, 新建後無需此批code--*/

// assignmentsql.query('CREATE DATABASE assignment',(err)=>{
// 	if(err) throw err;
// 	console.log('DB created');
// });

// var tableuser = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';

// assignmentsql.query(tableuser,(err)=>{
// 	if(err) throw err;
// 	console.log('TABLE created');
// });

/*--結束sql連線--*/

assignmentsql.end();

const router = require('./router-week4.js');

app.use(router);

app.listen(3000);