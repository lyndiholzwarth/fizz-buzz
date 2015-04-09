$(document).ready(function(){
	var max;
	var maxNumber = false;
	console.log(Number(max))
	
	while(!maxNumber)
	{
		var max = prompt("How high should I FizzBuzz? Please supply a number");
		
		//check if number
		if (isNaN(max)==true){
			console.log("not a number");
			alert("Sorry, I need a real number. Please try again.");
			maxNumber= false;
		}

		//test for decimal
		else if (max % 1 != 0){
			console.log("decimal");
			alert("Sorry, I need a whole number. Please try again.");
			maxNumber=false;
		}

		else if (max==0){
			console.log("Zero!");
			alert("Counting to zero is no fun. Please try again.");
			maxNumber=false;
		}

		else if (max<0){
			console.log("It's negative");
			alert("Let's count UP. Please try again.");
			maxNumber=false;
		}
	
	// then run fizzbuzz
		else maxNumber=true;

	}
	console.log("Yay!")
		//	(max % 1 ==0){
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
		
});
