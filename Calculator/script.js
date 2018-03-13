function btnPlus(){
	document.calculator.display.value+="+";
	document.calculator.display.style.textAlign="right";
}
function btnMinus(){
	document.calculator.display.value+="-";
	document.calculator.display.style.textAlign="right";
}
function btnMul(){
	document.calculator.display.value+="*";
	document.calculator.display.style.textAlign="right";
}
function btnDivide(){
	document.calculator.display.value+="/";
	document.calculator.display.style.textAlign="right";
}
function btnClear(){
	document.calculator.display.value=" ";
	document.calculator.display.style.textAlign="right";
}