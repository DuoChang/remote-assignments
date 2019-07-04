function ajax( src , callback ){
  
    	var getproduct = new XMLHttpRequest();
    	
		getproduct.onreadystatechange = function(){

			if( getproduct.readyState === 4 ){
				
				if ( getproduct.status === 200 ){

					callback( getproduct.responseText );

				}

			}

		};

		getproduct.open( 'GET' , src );

		getproduct.send();

} 

function render(data){ 

	var newDiv = document.createElement( "div" );

	var newContent = document.createTextNode( data );

	document.body.appendChild( newDiv );
	
	newDiv.appendChild( newContent );

 } 

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ render(response); });