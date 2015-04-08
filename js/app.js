$(document).ready(function(){
	var max = prompt("How high should I FizzBuzz? Please supply a number");
	console.log(Number(max))
	
	//check if number//
	if (isNaN(max)==true){
		console.log("not a number")
		alert("Sorry, I need a real number.")
		var max = prompt("Please try again. How high should I FizzBuzz?")
	}

	//test for decimal//
	if (max % 1 != 0){
		console.log("decimal")
		alert("Sorry, I need a whole number.")
		var max = prompt("Please try again. How high should I FizzBuzz?")
	}

	//run fizzbuzz//
	else if (max % 1 ==0){
		for (var myNumber = 1; myNumber <=max; myNumber++) 
		   if (((myNumber%3)===0)&&((myNumber%5)===0)){
		   	document.write("fizzbuzz"+"<br>");
		   }
		   	else if ((myNumber%3)===0){
		   	document.write("fizz" +"<br>");
		   }
		   else if ((myNumber%5)===0){
		   	document.write("buzz" +"<br>");
		   }
		   else {
		   	document.write(myNumber+"<br> ");
		    } ;  
	}
});