var playerAction =  process.argv[process.argv.length - 1];

const game = require('./lib')

// const result = game(playerAction);
// console.log(result);

// 设置变量的一个数据统计
let count = 0;

// 设置用户输入多次代码的操作
// process.stdin用来获取进程的标准输入
process.stdin.on('data', e => {
    const playerAction = e.toString().trim();

    // console.log(playerAction);

    const result = game(playerAction);
    console.log(result);

    if(result === -1) {
        count++;
    }
    if(count === 3) {
        process.exit(); // 如果玩家连续赢了三次，杀掉进程.
    }
})