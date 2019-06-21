function max(){ 
	let maxnum = 0 ;
	for(let i=0 ; i<arguments.length ; i+=1){
		if(arguments[i]>maxnum){
			maxnum=arguments[i];
		}
	}
	return maxnum;
} 
