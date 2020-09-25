// const buffer1 = Buffer.from('huanyue');
// const buffer2 = Buffer.from([0,1,2,3,4]);

// const buffer3 = Buffer.alloc(20);

// console.log(buffer1); // 产生字符串个数即7位长度的buffer
// console.log(buffer2); // 产生五位长度的buffer
// console.log(buffer3); // 产生20位长度的空的buffer

const fs = require('fs');
const protobuf = require('protocol-buffers');
const schema = protobuf(fs.readFileSync(__dirname + 'test.proto','utf-8'));

console.log(schema);

const buffer  = schema.Column.encode({
    id: 1,
    name: Node.js,
    price: 99.99
});
console.log(schema.Column.decode(buffer));