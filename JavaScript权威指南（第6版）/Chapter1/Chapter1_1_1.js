// JavaScript Document
//对象是名/值对的集合，或字符串到值映射的集合
var book = {
	topic: "JavaScript",	//属性"topic"的值是"JavaScript"
	fat: true	//属性"fat"的值是true
};

//通过"."或"[]"来访问对象属性
alert(book.topic);
alert(book["fat"]);	//另外一种获取属性的方式
book.author = "Flanagan"; 	//通过赋值创建一个新属性
book.content = {};	//{}是一个空对象，它没有属性

//JavaScript同样支持数组（以数字为索引的列表）
var primes = [2,3,5,7];	//拥有4个值的数组，由"["和"]"划定边界
alert(primes[0]);
alert(primes.length);
alert(primes[primes.length-1]);
primes[4] = 9;
primes[4] = 11;
var empty = [];
alert(empty.length);

//数组和对象中都可以包括另一个数组或对象：
var points = [
	{x: 0, y: 0},
	{x: 1, y: 1}
];
var data = {
	trial1: [[1,2],[3,4]],	//每一个属性都是数组
	trial2: [[2,3],[4,5]]	//数组的元素也是数组
};