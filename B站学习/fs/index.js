var fs = require('fs'); // 引入fs模块

// node读写文件也有同步和异步的区别（回调函数）
var fd = fs.openSync('hello.txt', 'r');
console.log(fd);

// var buf = Buffer.alloc(20);
// 同步的方式
var content = fs.readFileSync('hello.txt', { flag: 'r', encoding: 'utf-8' });

// 异步的方式
fs.readFile('hello.txt', { flag: 'r', encoding: 'utf-8' }, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
    console.log('下面的console先输出这里再输出');
})

console.log('123异步最先输出的信息');
// console.log(content.toString());

