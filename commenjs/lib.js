console.log("hahhahhah");

exports.hello = "world"; // 指定被引用的js的输出 (挂载一个字符串)

// 挂载一个函数
exports.add = function (a, b) {
  return a + b;
};

// 挂载一个对象
exports.huanyue = { hello: "huanyue" };

setTimeout(() => {
  console.log(exports);
}, 2000);

module.exports = function minus(a, b) {
    return a - b;
}; // 用module修改变量会把整个exports变量覆盖掉
