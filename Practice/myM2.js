

(function () {

  var msg = 'My atguigu'
  //操作数据的函数
  function doSomething() {
    console.log("doSomething"+msg.toUpperCase())   //转换成大写
  }
  function doOtherthing() {
    console.log("doOtherthing"+msg.toLowerCase())   //转换成小写
  }
  window.module = {
    doSomething:doSomething,
    doOtherthing:doOtherthing
  }
  
  
})()