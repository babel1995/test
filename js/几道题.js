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

	基本作用：改变对象的执行上下文
	我们在写一个方法的时候，总是会用到一个关键字this，而this的指向就是我们这里所说的执行上下文（执行环境）

	call()
	function.call(obj[,arg1[, arg2[, [,.argN]]]]])
	调用call的对象必须是个函数function
	call的第一个参数将会是function改变上下文后指向的对象，如果不传，将会默认是全局对象window
	第二个参数开始可以接收任意个参数，这些参数将会作为function的参数传入function
	调用call的方法会立即执行

	apply()
	function.apply(obj[,argArray])
	与call方法的使用基本一致，但是只接收两个参数，
	其中第二个参数必须是一个数组或者类数组，这也是这两个方法很重要的一个区别

	相同点：

	都能够改变方法的执行上下文（执行环境），将一个对象的方法交给另一个对象来执行，并且是立即执行

	不同点：

	call方法从第二个参数开始可以接收任意个参数，
	每个参数会映射到相应位置的func的参数上，可以通过参数名调用，
	但是如果将所有的参数作为数组传入，
	它们会作为一个整体映射到func对应的第一个参数上，之后参数都为空
	function func (a,b,c) {}

	func.call(obj, 1,2,3)
	// function接收到的参数实际上是 1,2,3

	func.call(obj, [1,2,3])
	// function接收到的参数实际上是 [1,2,3],undefined,undefined
	
	apply方法最多只有两个参数，
	第二个参数接收数组或者类数组，
	但是都会被转换成类数组传入func中，
	并且会被映射到func对应的参数上

	func.apply(obj, [1,2,3])
	// function接收到的参数实际上是 1,2,3

	func.apply(obj, {
	    0: 1,
	    1: 2,
	    2: 3,
	    length: 3
	})
	// function接收到的参数实际上是 1,2,3


5、将arguments转换成数组

	arguments 就是函数内一个內建对象，它包含函数接收到的所有变量（所有参数）。
	arguments其实是一个对象，它与数组一样有索引以及length的属性。但是却不能使用数组的方法。

	arguments转化成数组的方法1：
	function fun(){
                    var arr =[]; //定义一个空数组
                    console.log(arguments); //打印参数
                    for(var i = 0 ; i<arguments.length;i++){
                        arr.push(arguments[i]); //利用循环和数组的push()方法将每一个参数添加到数组
                    }
                    return arr; //返回装好所有参数的数组
                }
                console.log(fun(1,2,3,4,5)); //打印传入12345参数的fun，结果为[1,2,3,4,5]，__proto__=Array(0)

    arguments转化成数组的方法2：
    function fun(){
                    console.log(arguments); //打印参数
                    return [].slice.call(arguments); //当arr.slice() 里面没有实参则返回数组本身，
                    // 利用call使arguments对象拿到数组对象的slice方法，并立即执行该方法，将arguments返回成一个数组。
                }
                console.log(fun(1,2,3,4,5)); //打印含arguments的fun，结果为[1,2,3,4,5]，__proto__=Array(0)


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

	function removeClass(dom,name){
		var allClassName=dom.classname.split(' ');
		var nameClass=allClassName.filter(function(a){return a != name})
		dom.classname=newClass;
		return newClass;
	}
	
	例：
	<div class="div1 div2 div3 div4 div5"></div>

	var div=document.getElementsByTagName('div')[0];
	function removeClass(dom,name){
		var allClassName=dom.className.split(' ');
		var newClass=allClassName.filter(function(a){return a != name})
		dom.className=newClass;
		return newClass;
	}
	removeClass(div,'div3');



9、JS判断数据类型   参考：http://m.jb51.net/article/102972.htm

	判断js中的数据类型有以下几种方法：
	typeof、instanceof、 constructor、 prototype、 $.type()/jquery.type()
	例：
	var a = "iamstring.";
	var b = 222;
	var c= [1,2,3];
	var d = new Date();
	var e = function(){alert(111);};
	var f = function(){this.name="22";};　

	1、最常见的判断方法：typeof//返回字符形式
	alert(typeof a)  ------------> string
	alert(typeof b)  ------------> number
	alert(typeof c)  ------------> object
	alert(typeof d)  ------------> object
	alert(typeof e)  ------------> function
	alert(typeof f)  ------------> function
	typeof返回的类型都是字符串形式，需注意，例如：
	alert(typeof a == "string") -------------> true
	alert(typeof a == String) ---------------> false
	另外typeof 可以判断function的类型；在判断除Object类型的对象时比较方便。

	2、判断已知对象类型的方法： instanceof
	alert(c instanceof Array) ---------------> true
	alert(d instanceof Date)-----------------> true
	alert(f instanceof Function) ------------> true
	alert(f instanceof function) ------------> false
	注意：instanceof 后面一定要是对象类型，并且大小写不能错，该方法适合一些条件选择或分支。

	3、根据对象的constructor判断： constructor
	alert(a.constructor === String)----------> true
	alert(c.constructor === Array) ----------> true
	alert(d.constructor === Date) -----------> true
	alert(e.constructor === Function) -------> true

	注意： constructor 在类继承时会出错
	在对象有继承类的时候，若不指定 aobj.constructor 的继承者，则等于基类。
	function A(){};
	function B(){};
	A.prototype = new B(); //A继承自B
	var aobj = new A();
	alert(aobj.constructor === B) -----------> true;
	alert(aobj.constructor === A) -----------> false;

	解决construtor的问题通常是让对象的constructor手动指向自己：
	aobj.constructor = A; //将自己的类赋值给对象的constructor属性
    alert(aobj.constructor === A) -----------> true;
    alert(aobj.constructor === B) -----------> false; //基类不会报true了;

    而instanceof方法不会出现该问题，对象直接继承和间接继承的都会报true：
    alert(aobj instanceof B) ----------------> true;
    alert(aobj instanceof B) ----------------> true;

    4、通用但很繁琐的方法： prototype//返回字符形式
	alert(Object.prototype.toString.call(a) === '[object String]') -------> true;
	alert(Object.prototype.toString.call(b) === '[object Number]') -------> true;
	alert(Object.prototype.toString.call(c) === '[object Array]') -------> true;
	alert(Object.prototype.toString.call(d) === '[object Date]') -------> true;
	alert(Object.prototype.toString.call(e) === '[object Function]') -------> true;
	alert(Object.prototype.toString.call(f) === '[object Function]') -------> true;

	5、无敌万能的方法：jquery.type()//返回字符形式且jquery要实现定义否则报错

	如果对象是undefined或null，则返回相应的“undefined”或“null”。
	jQuery.type( undefined ) === "undefined"
	jQuery.type() === "undefined"
	jQuery.type( window.notDefined ) === "undefined"
	jQuery.type( null ) === "null"

	如果对象有一个内部的[[Class]]和一个浏览器的内置对象的 [[Class]] 相同，我们返回相应的 [[Class]] 名字。
	jQuery.type( true ) === "boolean"
	jQuery.type( 3 ) === "number"
	jQuery.type( "test" ) === "string"
	jQuery.type( function(){} ) === "function"
	jQuery.type( [] ) === "array"
	jQuery.type( new Date() ) === "date"
	jQuery.type( new Error() ) === "error" // as of jQuery 1.9
	jQuery.type( /test/ ) === "regexp"
	其他一切都将返回它的类型“object”。