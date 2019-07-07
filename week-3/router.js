const express = require('express');

const expressrouter = express.Router();

expressrouter.get('/',(req,res)=>{

	res.send('<h1>Hello!My Server!</h1>');

});

expressrouter.use('/sum.html', express.static('./sum.html') );

expressrouter.get('/getData',(req,res)=>{

	if( ! /\?.+/.test(req.url) ){                   
     	
		res.send('<h1>Lack of Parameter</h1>');
	
	}else{

		var nums = req.query.number;
		
		if( nums === 'xyz' ){			
		
			res.send('<h1>Wrong Parameter</h1>');
		
		}else if(parseInt(nums) > 0){
		
			nums = parseInt(nums);			
		
			if(nums > 1){			
		
				var showtext = "";			
		
				var sum = 0;			
		
				for(i = 1 ; i < nums ; i += 1 ){
		
					showtext += i + " + "			
		
					sum += i;			
		
				}
		
				sum += nums;				
		
				showtext += nums + " = " + sum;				
		
				res.send('<h1>'+ showtext + '</h1>');			
		
			}else if(nums == 1){			
		

				res.send('<h1>' + nums + '</h1>');			
		
			}		
		
		}		
	
	}

});

expressrouter.post('/trackName',(req,res)=>{
	
	req.query.name = req.body.username;

	res.cookie('username',req.body.username);

	res.redirect('/myName');

})

expressrouter.get('/myName',(req,res)=>{


	if( req.cookies.username == undefined ){

		res.render('trackNamepug');

	}else{
		
		res.send(req.cookies.username);	

	}

});


module.exports = expressrouter;