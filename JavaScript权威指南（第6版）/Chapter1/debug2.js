//使用jQuery重写debug()函数
function debug(msg) {
	var log = $("#debuglog");	//找到要显示的msg的元素
	if(log.length == 0) {	//如果不存在则创建之
		log = $("<div id='debuglog'><h1>Debug Log</h1></div>");
		log.appendTo(document.body);	//并将其追加到body里
	}
	log.append($("<pre/>").text(msg));	//将msg包装在<pre>中，再追加到log里
}