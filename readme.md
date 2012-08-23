[![build status](https://secure.travis-ci.org/SportZing/node-consts.png)](http://travis-ci.org/SportZing/node-consts)
# consts

Node.js utility for simply defining both module and application-wide constants

## Install

```bash
$ npm install consts
```

## Usage

```javascript
var consts = require('consts');

consts.define('FOO', 25);
console.log(consts.FOO);  // 25

consts.define('BAR');
console.log(consts.BAR);  // null

consts.define(exports, 'BAZ', 10);
console.log(exports.BAZ);  // 10

// Also supports chaining
consts
	.define('A', 1)
	.define('B', 2)
	.define('C', 3);
```

## MIT License

Copyright (C) 2012 James Brumond

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

