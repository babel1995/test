// 定义一个Cat类
function Cat (option) {
  this.name = option.name;
  this.age = option.age;
  this.tizhong = option.tizhong || 1.5;
  this.color = option.color || 'black';
  this.width = option.width || 60;
  this.height = option.height || 30;
  this.cat = '';

  this.born = function () {
    var wrap = document.getElementById('cat-box');
    var div = document.createElement('div');
    wrap.appendChild(div);
    this.cat = div;
    this.setCat();
  }

  this.setCat = function () {
    var cat = this.cat;
    console.log(this.width);
    cat.style.width = this.width + 'px';
    cat.style.height = this.height+ 'px';
    cat.style.borderRadius = '30px';
    cat.style.backgroundColor = this.color;
  }
  // 初始化cat
  this.init = function () {
    this.born();
    this.eat();
  };

  // 投食
  this.eat = function () {
    var self = this;
    var toushi = document.createElement('input');
    toushi.type = 'button';
    toushi.value = '喂食';
    this.cat.appendChild(toushi);

    toushi.addEventListener('click',function () {
      self.growth();
    })
  };

  this.growth = function () {
    this.tizhong++;
    this.width+=5;
    this.height+=3;
    this.setCat();
  }

  this.init();
}

// 实例化一个cat对象
var cat1 = new Cat({
  name: '大头',
  age: 10,
  color: '#eee'
})

var cat2 = new Cat({
  name: '芝麻糊',
  age: '0.5',
  tizhong: 3
})