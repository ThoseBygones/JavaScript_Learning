// JavaScript Document
//这些JavaScript语句使用该语法包含条件判断和循环
function abs(x) {
	if(x >= 0) {
		return x;
	}
	else {
		return -x;
	}
}

function factorial(n) {
	var product = 1;
	while(n > 1) {
		product *= n;
		n--;
	}
	return product;
}

alert(factorial(4));
function factorial2(n) {
	var i, product = 1;
	for(i = 2; i <= n; i++)
		product *= i;
	return product;
}
alert(factorial2(5));