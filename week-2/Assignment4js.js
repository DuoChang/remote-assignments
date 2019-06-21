/*---Assignment4 Request 1---*/


var welcome = document.getElementsByClassName('welcome');
welcome[0].addEventListener('click',()=>{
	welcome[0].textContent = "Have a Good Time!";
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

/*---Assignment4 Request 2---*/

var hiddenbutton = document.getElementById('menulist');
var hiddenlist = document.getElementById('hiddenlist');
document.write(hiddenlist);
hiddenbutton.addEventListener('click',()=>{
	hiddenlist.style.display = "inline-block";
});





 /*---Assignment1---*/
 /*---Assignment2---*/
 /*---Assignment3---*/
 /*---Assignment5---*/