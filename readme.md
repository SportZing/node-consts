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
```
