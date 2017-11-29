function Person (option) {

	var option = option || {};

	this.fps = option.fps || 1000/12;
	this.speed = option.speed || 10;
	this.frame = 0; // 当前动画帧
	this.pos = {  // dom 平面坐标
		x: 0,
		y: 0
	}
	/**
	 * 创建DOM
	 * @return {[type]} [description]
	 */
	this.create = function () {
		var div = document.createElement('div');
		div.style.width = '98px';
		div.style.height = '106px';
		div.style.background = 'url(rpg.jpg) 0 -12px';
		div.style.position = 'absolute';
		document.body.appendChild(div);
		this.person = div;
	}
	/**
	 * 创建定时器
	 * @return {[type]} [description]
	 */
	this.move = function () {
		var timer=null;
		var self = this;
		timer=this.interval = setInterval(function(){
			if (self.person.offsetLeft>=500) {
				clearInterval(timer);
			}else{
				self.rightRun();
				self.frame++;
			}

			

		},this.fps);
	}
	/**
	 * 往右边跑
	 * @return {[type]} [description]
	 */
	this.rightRun = function () {

		switch (this.frame) {
			case 0:
			this.person.style.backgroundPosition = '0 -12px';
			break;
			case 1:
			this.person.style.backgroundPosition = '-100px -12px';
			break;
			case 2:
			this.person.style.backgroundPosition = '-200px -12px';
			break;
			case 3:
			this.person.style.backgroundPosition = '-300px -12px';
			break;
			case 4:
			this.person.style.backgroundPosition = '-400px -12px';
			break;
			case 5:
			this.person.style.backgroundPosition = '-500px -12px';
			this.frame = 0;
			break;
			default:
			this.person.style.backgroundPosition = '0 -12px';
		}
		this.person.style.left = this.pos.x + 'px';
		this.pos.x += this.speed;
	}


	this.create();
	this.move();

}

var p1 = new Person({
	speed: 15
});


