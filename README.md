# flatbuffer usage example - transfer uint arrays
> flatbuffer 的基本使用，没有嵌套，入门级别用法。  
genBuf.js 与 parseBuf.js 即文章。

### files 
```bash
 example.fbs   # flatbuffer schema 文件，定义了三个字段
 example_generated.js # flatc -s example.fbs 生成此文件，用于require
 genBuf.js  # 使用改schema记录数据并将buffer写入result.buf文件
 parseBuf.js # 读取result.buf 文件，然后解析三个字段，打印到控制台
```
### test

``` bash
node genBuf.js 
# 控制台将输出提示
# 并生成文件result.buf
```

``` bash
node parseBuf.js
# 将读取result.buf文件
# 解析字段，并打印到控制台
```

### My FAQ  

1. genBuf.js 中存入Uint8Array。
需要使用Create...Vector方法，并需要在startExample之前调用。
2. 存取浮点值时，8.123 变为 8.123000xxx
忽略，小数在内存中无法存储的精确。

