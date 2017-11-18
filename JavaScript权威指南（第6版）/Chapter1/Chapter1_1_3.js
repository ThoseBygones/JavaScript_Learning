// JavaScript Document
//当函数赋值给对象的属性，我们称为“方法”，多有的JavaScript对象都含有方法
var a = [];	//创建一个空数组
a.push(1,2,3);	//push()方法向数组中添加元素
a.reverse();	//将数组元素的次序反转

var points = [
	{x: 0, y: 0},
	{x: 1, y: 1}
];

//我们也可以定义自己的方法，"this"关键字是对定义方法的对象引用：这里的例子是上文中提到的包含两个点位置信息的数组
points.dist = function() {
	var p1 = this[0];
	var p2 = this[1];
	var a = p2.x - p1.x;
	var b = p2.y - p1.y;
	return Math.sqrt(a * a + b * b);	//用Math.sqrt()来计算平方根
};
alert(points.dist());