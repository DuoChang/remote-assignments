
/*---Method 1---*/ 

var args1={
	op:'+',
	n1:3,
	n2:4
}

/*---Method 2---*/ 

class Args{
	constructor(op,n1,n2){
		this.op=op;
		this.n1=n1;
		this.n2=n2;
	}
}

const args2 = new Args('-',3,4);

function calculate(args){ let result; if(args.op==="+"){ result=args.n1+args.n2; }else if(args.op==="-"){ result=args.n1-args.n2; }else{ result="Not supported"; } return result; } 

document.write(calculate(args2));