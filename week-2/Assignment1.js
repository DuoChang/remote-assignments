function max(...numbers){ 
	let maxnum = 0 ;
	for( let i = 0 ; i < numbers.length ; i+=1){
		if( numbers[i] > maxnum ){
			maxnum = numbers[i];
		}
	}
	return maxnum;
} 