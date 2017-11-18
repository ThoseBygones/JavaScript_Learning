// JavaScript Document
//函数是一段带有参数的JavaScript代码端，可以多次调用
var y = 3;
function plus1(x) {
	return x+1;
}
alert(plus1(y));

var square = function(x) {
	return x*x;
};	//分号表识了赋值语句的结束
alert(square(plus1(y)));