function hide(e, reflow) {	//通过JavaScript操纵样式来隐藏元素e
	if(reflow) {
		e.style.display = "none";	//隐藏这个元素，其所占的空间也随之消失
	}
	else {
		e.style.visibility = "hidden";	//将e隐藏，但是保留其所占空间
	}
}

function highlight(e) {
	//简单地定义或追加HTML类属性
	//这里假设CSS样式表中已经有"hilite"类的定义
	if(!e.className) e.className = "hilite";
	else e.className += " hilite";
}