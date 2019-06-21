function avg(data){
	var pricesum = 0;
	for(var products in data){
		for(var i=0;i<data[products].length;i+=1){
			pricesum+=data[products][i].price;
		}

	}
	document.write(pricesum/data.size);
	return pricesum/data.size;
} 

avg({ 
size:3, products:[ { 
name:"Product 1", price:100 
}, { 
name:"Product 2", price:700 
}, { 
name:"Product 3", price:250 
} 
] });