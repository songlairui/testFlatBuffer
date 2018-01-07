const flatbuffers = require('flatbuffers').flatbuffers
const { My } = require('./example_generated')
const fs = require('fs')

var bytes = new Uint8Array(fs.readFileSync('./result.buf'))
console.info(Buffer.from(bytes))
var buf = new flatbuffers.ByteBuffer(bytes)

var result = My.frame.Example.getRootAsExample(buf)
console.log('x:',result.x())
console.log('y:',result.y())
for(let i =0,length = result.imgdataLength();i<length;i++){
  console.log(`imgdata ${i}`, result.imgdata(i))
}
