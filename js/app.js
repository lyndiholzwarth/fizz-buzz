$(document).ready(function(){
	for (var myNumber = 1; myNumber < 100; myNumber++) 
	   if (((myNumber/3)%1===0)&&((myNumber/5)%1)===0){
	   	document.write("fizz-buzz"+"<br>");
	   }
	   	else if (((myNumber/3)%1)===0){
	   	document.write("fizz" +"<br>");
	   }
	   else if (((myNumber/5)%1)===0){
	   	document.write("buzz" +"<br>");
	   }
	   else {
	   	document.write(myNumber+"<br> ");
	    } ;  

});