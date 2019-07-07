const express = require('express');

const expressrouter = express.Router();

/*--用static HTML-homepage當作首頁--*/

expressrouter.use(express.static('style'));
expressrouter.use('/homepage', express.static('./homepage.html') );

/*--設定member page--*/

expressrouter.use( '/memberpage' , express.static( './memberpage.html' ) );

/*--設定sign in 回傳內容--*/

expressrouter.post('/SignIn',(req,res)=>{

	const mysql = require('mysql');

	const assignmentsql = mysql.createConnection({

		host:'localhost',
		user:'root',
		password:'pega@duo0707',
		database:'assignment'

	});

	assignmentsql.connect(function(){});

	var selectdata = 'SELECT id FROM user WHERE email=\'' + req.body.email + '\' AND password=\'' + req.body.password + '\'';

	var signinjudge;

	assignmentsql.query( selectdata , (err,result)=>{

		if(err) throw err;

		if(result.length > 0){

			if(result[0].id > 0){

				return res.send('memberpage');

				assignmentsql.end();

				console.log('登入成功');

			}else{

				return res.send('jumpalertin');

				assignmentsql.end();

				console.log('尚未註冊,登入失敗');

			}

		}else{

			return res.send('jumpalertin');

			console.log('database無資料,登入失敗');

			assignmentsql.end();

		}

	});

})

/*--設定sign up 回傳內容--*/

expressrouter.post('/SignUp',(req,res)=>{

	const mysql = require('mysql');

	const assignmentsql = mysql.createConnection({

		host:'localhost',
		user:'root',
		password:'pega@duo0707',
		database:'assignment'

	});
	
	assignmentsql.connect(function(){});

	var selectdata = 'SELECT id FROM user WHERE email=\'' + req.body.email + '\' AND password=\'' + req.body.password + '\'';

	assignmentsql.query( selectdata , (err,result)=>{

		if(err) throw err;

		if( result.length > 0){

			if( result[0].id > 0 ){

				return res.send('jumpalertup');

				console.log('已有註冊');

				assignmentsql.end();

			}else{

				var data = {email:req.body.email, password:req.body.password};

				assignmentsql.query( 'INSERT INTO user SET ?' , data, (err,result)=>{
					if(err) throw err;			
				});

				return res.send('memberpage');

				console.log('註冊成功');

				assignmentsql.end();

			}
		}else{

			var data = {email:req.body.email, password:req.body.password};

			assignmentsql.query( 'INSERT INTO user SET ?' , data, (err,result)=>{
				if(err) throw err;

			});

			return res.send('memberpage');			

			console.log('database無資料,註冊成功');

			assignmentsql.end();

		}

	});
	
})

module.exports = expressrouter;