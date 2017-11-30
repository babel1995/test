1、谈谈display
	
	CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，
	如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。
	定义：display 属性规定元素应该生成的框的类型。
	用法：用于定义建立布局时元素生成的显示框类型。
	常用值：
	block       	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
    none        	此元素不会被显示。
    inline      	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
    inline-block    默认宽度为内容宽度，可以设置宽高，同行显示。
    list-item   	象块类型元素一样显示，并添加样式列表标记。
    table       	此元素会作为块级表格来显示。
    inherit     	规定应该从父元素继承 display 属性的值。
	inline-table	内联表格来显示，表格前后没有换行符。
	flex			弹性布局（css3）

2、谈谈position
	
	规定元素的定位类型，任何元素都可以定位。
	值：
	static 			默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。
  	absolute		生成绝对定位的元素，相对于值不为 static的第一个父元素进行定位。
    fixed 			生成固定定位的元素，相对于浏览器窗口进行定位。（老IE不支持）
    relative		生成相对定位的元素，相对于其正常位置进行定位，保留正常位置。
  	inherit			规定从父元素继承 position 属性的值。
  	
3、垂直居中

	

4、call apply的区别
5、将arguments转换成数组
6、前端性能优化

7、
var a = 1;
function show(){
	console.log(a);//undefined
	var a =10;
	console.log(a);//10
};
show();

8、实现jquery的 removeClass方法
9、JS判断数据类型   参考：http://m.jb51.net/article/102972.htm