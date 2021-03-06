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

				console.log('登入成功');
				
				return res.send('memberpage');

				assignmentsql.end();

			}else{

				console.log('尚未註冊,登入失敗');
				
				return res.send('jumpalertin');

				assignmentsql.end();

			}

		}else{

			console.log('database無資料,登入失敗');

			return res.send('jumpalertin');			

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

				console.log('已有註冊');
				
				return res.send('jumpalertup');

				assignmentsql.end();

			}else{

				var data = {email:req.body.email, password:req.body.password};

				assignmentsql.query( 'INSERT INTO user SET ?' , data, (err,result)=>{
					if(err) throw err;			
				});
				
				console.log('註冊成功');
				
				return res.send('memberpage');

				assignmentsql.end();

			}
		}else{

			var data = {email:req.body.email, password:req.body.password};

			assignmentsql.query( 'INSERT INTO user SET ?' , data, (err,result)=>{
				if(err) throw err;

			});

			console.log('database無資料,註冊成功');			

			return res.send('memberpage');

			assignmentsql.end();

		}

	});
	
})

module.exports = expressrouter;