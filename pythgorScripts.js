///DOM References///
var $side1 = document.getElementById("side1").value;
var $side2 = document.getElementById("side2").value;
//var $submit = document.getElementById("submit");
var $hypotenuse = document.getElementById("hypotenuse");
var $form = document.getElementById("mathForm");
function square(x){
	console.log("square() invoked");
	
	return x*x;
}
function check(num1, num2){
	console.log("Check() invoked");
	if(isNaN(num1)){
		num1 = undefined;
		alert("please insert a number!");
	} else if(isNaN(num2)){
		num2 = undefined;
		alert("please insert a number!");
	} /*else {
		num1 += value;
		num2 += value;
	}*/
	
}
function hypotenuse(n1, n2){
	console.log("hypotenuse() invoked");
	var sq = square(n1) + square(n2);
   return Math.sqrt(sq);
}

$form.onsubmit = function submit(e){
	console.log("submit() invoked");
	e.preventDefault();
	$hypotenuse.innerHTML = $side1 + $side2;
	hypotenuse($side1, $side2);
	check($side1, $side2);
	$form.reset();
};
