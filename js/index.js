// Global Variables
var res = 0.0;
var input = "";
var op = "";



// Calculations function
function calculate(x, y) {

	if (op == "") {
		return y;
	}
	else if (op == "=") {
		op = "";
		return x;
	}
	switch (op) {
		case "+":
			return x + y;
		case "-":
			return x - y;
		case "*":
			return x * y;
		case "/":
			return x / y;
	}
}



// Screen
function display() {
	
	// Keep only 3 decimal digits
	if (input.indexOf(".") != -1)
		input = input.slice(0, (input.indexOf(".")) + 4);

	res = res.toString();
	if (res.indexOf(".") != -1) {
		res = res.slice(0, (res.indexOf(".")) + 4);
		res = Number(res);
	}
	
	if (op == "") { 								// ac
		if (res == 0) { 							// ac/res=0
			if (input == "") 						// fresh start/clear
				$(".display").html("0&nbsp;");
			else									// entered a number after ac
				$(".display").html(input + "&nbsp;");
		}
	}
	else if (op == "=")	{							// after '='
		if (input == "")
			$(".display").html(res + "&nbsp;");
		else
			$(".display").html(input + "&nbsp;");
	}
	else 														
		$(".display").html("<span style='color:gray;'>" + res + " " + op + " </span><span> " + input + "&nbsp;</span>");

	// Transforming res back to float
	res = parseFloat(res);
}



// Starting point of Execution
$(document).ready(function() {
	
	display();

	// Button 1
	$('#btn-1').on('click', function() {
		input += "1"; 
		display();
	});
	
	// Button 2
	$('#btn-2').on('click', function() {
  		input += "2";
		display();
	});
	
	// Button 3
	$('#btn-3').on('click', function() {
  		input += "3";
		display();
	});
	
	// Button 4
	$('#btn-4').on('click', function() {
  		input += "4";
		display();
	});
	
	// Button 5
	$('#btn-5').on('click', function() {
		input += "5";
		display();
	});
	
	// Button 6
	$('#btn-6').on('click', function() {
		input += "6";
		display();
	});
	
	// Button 7
	$('#btn-7').on('click', function() {
  		input += "7";
		display();
	});
	
	// Button 8
	$('#btn-8').on('click', function() {
  		input += "8";
		display();
	});
	
	// Button 9
	$('#btn-9').on('click', function() {
		input += "9";
		display();
	});
	
	// Button 0
	$('#btn-0').on('click', function() {
  		input += "0";
		display();
	});
	
	// Button .
	$('#btn-point').on('click', function() {
  		input += ".";
		display();
	});
	
	// Button +
	$('#btn-plus').on('click', function() {
		res = calculate(res, parseFloat(input));
  		op = "+";
		input = "";
		display();
	});
	
	// Button -
	$('#btn-minus').on('click', function() {
		res = calculate(res, parseFloat(input));
  		op = "-";
		input = "";
		display();
	});
	
	// Button x
	$('#btn-mul').on('click', function() {
  		res = calculate(res, parseFloat(input));
  		op = "*";
		input = "";
		display();
	});
	
	// Button ÷
	$('#btn-div').on('click', function() {
		res = calculate(res, parseFloat(input));
  		op = "/";
		input = "";
		display();
	});
	
	// Button =
	$('#btn-equal').on('click', function() {
		res = calculate(res, parseFloat(input));
		op = "=";
		input = "";
		display();
	});
	
	// Button AC
	$('#btn-ac').on('click', function() {
  		res = 0.0;
		input = "";
		op = "";
		display();
	});
	
	// Button DEL
	$('#btn-del').on('click', function() {
		if (input != "")
			input = input.slice(0, input.length-1);
		display();
	});
})