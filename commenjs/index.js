// node.js定义一个模块输出的方式
console.log("start");
require("./lib.js"); // 依赖的结果
var lib = require("./lib.js"); // 将依赖的结果赋值到变量上
console.log("end", lib); // end字符串后面加上lib查看引用的结果是什么样子的，被别人引用之后默认是一个空对象。

lib.additional = "test";
