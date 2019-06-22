 /*---Assignment1---*/

function max(...numbers){ 
	let maxnum = 0 ;
	for( let i = 0 ; i < numbers.length ; i += 1){
		if( numbers[i] > maxnum ){
			maxnum = numbers[i];
		}
	}
	return maxnum;
} 
 /*---Assignment2---*/

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


 /*---Assignment3---*/

 function avg(data){
	var pricesum = 0;
	for(var products in data){
		for(var i=0;i<data[products].length;i+=1){
			pricesum+=data[products][i].price;
		}

	}
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

 /*---Assignment5---*/

 function twoSum(nums, target){
	var answer=[];
	for(let i=0; i<nums.length ; i+=1){
		if(target-nums[i] > 0){
			answer[0]=i;
			for(let j=0; j<nums.length; j+=1){
				if(target-nums[i]-nums[j]===0){
					answer[1]=j;
					break;
				}
			}				
		}
	}
	return answer;
}
/*document.write(twoSum([2,7,11,15],9));*/


/*---Assignment4 Request 1---*/


var welcome = document.getElementsByClassName('welcome');
welcome[0].addEventListener('click',()=>{
	welcome[0].textContent = "Have a Good Time!";
});

/*---Assignment4 Request 2---*/

var hiddenbutton = document.getElementById('menulist');
var hiddenlist = document.getElementById('hiddenlist');
hiddenlist.style.display="none";
hiddenbutton.addEventListener('click',()=>{
	hiddenlist.style.display = "inline-block";
});
var closebutton = document.getElementById('closebutton');
closebutton.addEventListener('click',()=>{
	hiddenlist.style.display = "none";
});

/*---Assignment4 Request 3---*/
var hiddencontent=document.getElementById('hiddencontent');
var hiddenstatus = hiddencontent.style.display = "none";

var calltoaction = document.getElementById('calltoaction');
calltoaction.addEventListener('click',()=>{
	var hiddencontent=document.getElementById('hiddencontent');
	var hiddenstatus = hiddencontent.style.display;
	if( hiddenstatus === "none" ){
		hiddencontent.style.display = "block";
	}else if( hiddenstatus === "block" ){
		hiddencontent.style.display = "none";
	}
});