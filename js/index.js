  // 第一个轮播图
  //根据id获取元素对象
  function my$(id) {
      return document.getElementById(id);
  }
  //获取最外面的div
  var box=my$("box");
  //获取相框
  var inner=box.children[0];
  //获取相框的宽度
  var imgWidth=inner.offsetWidth;
  //获取ul
  var ulObj=inner.children[0];
  //获取所有的span标签
  var spanObjs=inner.children[1].children;
  //循环遍历所有的span标签,注册鼠标进入的事件
  for(var i=0;i<spanObjs.length;i++){
    //循环的时候把索引值保存在每个span的自定义属性中
    spanObjs[i].setAttribute("index",i);
    //注册鼠标进入事件
    spanObjs[i].onmouseover=function () {
      //先干掉所有的span的背景颜色
      for(var j=0;j<spanObjs.length;j++){
        //移除了每个span的类样式
        spanObjs[j].removeAttribute("class");
      }
      //设置当前的span的背景颜色
      this.className="current";
      //移动ul(每个图片的宽*鼠标放在这个按钮的索引值)
      //获取当前鼠标进入的span的索引
      var index=this.getAttribute("index");
      animate(ulObj,-index*imgWidth);
    };
  }
  //设置任意的一个元素,移动到指定的目标位置
  function animate(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
      //获取元素的当前的位置,数字类型
      var current = element.offsetLeft;
      //每次移动的距离
      var step = 10;
      step = current < target ? step : -step;
      //当前移动到位置
      current += step;
      if (Math.abs(current - target) > Math.abs(step)) {
        element.style.left = current + "px";
      } else {
        //清理定时器
        clearInterval(element.timeId);
        //直接到达目标
        element.style.left = target + "px";
      }
    }, 1);
  }
// 第二个轮播图
  //根据id获取元素对象
  function my$(id) {
      return document.getElementById(id);
  }
  //获取最外面的div
  var box=my$("tow");
  //获取相框
  var inner=box.children[0];
  //获取相框的宽度
  var imgWidth=inner.offsetWidth;
  //获取ul
  var ulObj=inner.children[0];
  //获取所有的span标签
  var spanObjs=inner.children[1].children;
  //循环遍历所有的span标签,注册鼠标进入的事件
  for(var i=0;i<spanObjs.length;i++){
    //循环的时候把索引值保存在每个span的自定义属性中
    spanObjs[i].setAttribute("index",i);
    //注册鼠标进入事件
    spanObjs[i].onmouseover=function () {
      //先干掉所有的span的背景颜色
      for(var j=0;j<spanObjs.length;j++){
        //移除了每个span的类样式
        spanObjs[j].removeAttribute("class");
      }
      //设置当前的span的背景颜色
      this.className="current";
      //移动ul(每个图片的宽*鼠标放在这个按钮的索引值)
      //获取当前鼠标进入的span的索引
      var index=this.getAttribute("index");
      animate(ulObj,-index*imgWidth);
    };
  }
  //设置任意的一个元素,移动到指定的目标位置
  function animate(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
      //获取元素的当前的位置,数字类型
      var current = element.offsetLeft;
      //每次移动的距离
      var step = 10;
      step = current < target ? step : -step;
      //当前移动到位置
      current += step;
      if (Math.abs(current - target) > Math.abs(step)) {
        element.style.left = current + "px";
      } else {
        //清理定时器
        clearInterval(element.timeId);
        //直接到达目标
        element.style.left = target + "px";
      }
    }, 1);
  }

