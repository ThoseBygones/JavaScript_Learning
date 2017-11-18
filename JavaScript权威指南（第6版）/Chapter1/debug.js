//在document中的一个指定区域输出调试信息
//如果document不存在这样的区域，则创建一个
function debug(msg) {
	//通过查看HTML元素id属性来查找文档的调试部分
	var log = document.getElementById("debuglog");

	//如果这个元素不存在，则创建一个
	if(!log) {
		log = document.createElement("div");	//创建一个新的<div>元素
		log.id = "debuglog";					//给这个元素的HTML id赋值
		log.innerHTML = "<h1>Debug Log</h1>";	//定义初始内容
		document.body.appendChild(log);	//将其添加到文档的末尾
	}
	//将消息包装在<pre>中，并添加至log中
	var pre = document.createElement("pre");	//创建<pre>标签
	var text = document.createTextNode(msg);	//将msg包装在一个文本节点中
	pre.appendChild(text);	//将文本添加至<pre>
	log.appendChild(pre);	//将<pre>添加至log
}