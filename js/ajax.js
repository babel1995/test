function ajax (url,fnSucc,fnFaild) {
//创建ajax对象
	var oAjax=null;
	if (window.XMLHttpRequest) {
		oAjax=new XMLHttpRequest();
	}else{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
//连接服务器
	oAjax.open('GET',url,true);
//请求
	oAjax.send();
//接收返回信息
	oAjax.onreadystatechange=function () {
		if (oAjax.readyState==4) {
			if (oAjax.status==200) {
				fnSucc (oAjax.responseText);
			}else{
				if (fnFaild) {
					fnFaild ();
				}
			}
		}
	}
}
/*参数说明：
ajax (url,fnSucc,fnFaild)
ajax (要从服务器读取的文件,成功执行的函数,失败执行的函数)
调用：
<head>
...
<script src="new-ajax.js"></script>
ajax ('abc.txt',function (str) {alert(str);},function () {alert("请求失败");});
...
</head>
读取abc.txt的内容，读取成功弹出该文件的内容（字符串形式），失败后弹出“请求失败”。
*/