console.log('hello world');

console.log(__filename);   // 当前运行脚本所在的位置
console.log(__dirname);    // 当前运行的脚本所在的目录位置

console.log(process);      // 进程对象，记录运行这个node.js的进程类的一些信息

// console.log(process.argv);
// 把用户的行为记录在一个变量里面
var playerAction =  process.argv[process.argv.length - 1];
// 取到用户的一个行为
console.log(playerAction);

// 程序逻辑实现

// 生成一个随机对象
var random = Math.random() * 3; 
if(random < 1) {
    var computerAction = 'rock';
} else if (random > 2) {
    var computerAction = 'scissor';
} else {
    var computerAction = 'paper';
}

if (computerAction === playerAction) {
    console.log('双方平局');
} else if (
    (computerAction === 'rock' && playerAction === 'paper') ||
    (computerAction === 'scissor' && playerAction === 'rock') ||
    (computerAction === 'papaer' && playerAction === 'scissor')
) {
    console.log('你赢了！');
} else {
    console.log('你输了~');
}