# Pythagorus
A calculator that calculates the hypotenuse of a right triangle using the pythagorean theorem

var $side1 = document.getElementById("side1").value;
var $side2 = document.getElementById("side2").value;
//var $submit = document.getElementById("submit");
var $hypotenuse = document.getElementById("hypotenuse");
var $form = document.getElementById("mathForm");
function square(x){
	console.log("square() invoked");
	
	return x*x;
}
function check(){
	console.log("Check() invoked");
	if(isNaN($side1)){
		$side1 = undefined;
		alert("please insert a number!");
	} else if(isNaN($side2)){
		$side2 = undefined;
		alert("please insert a number!");
	} else {
		$sy1 += value;
		$sy2 += value;
	}
	
}
function squareRoot(){
	console.log("squareRoot() invoked");
	var sq = square($side1) + square($side2);
   return Math.sqrt(sq);
}

$form.onsubmit = function submit(e){
	console.log("submit() invoked");
	e.preventDefault();
	$hypotenuse.innerHTML = $side1 + $side2;
	squareRoot();
	check();
	$form.reset();
};
