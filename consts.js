
/**
 * Utility for defining constants
 *
 * @author    James Brumond
 * @license   MIT License
 */

/*

  Usage:
  
    var consts = require('consts');
    
    consts.define('FOO', 25);
    console.log(consts.FOO);  // 25
    
    consts.define('BAR');
    console.log(consts.BAR);  // null
    
    consts.define(exports, 'BAZ', 10);
    console.log(exports.BAZ);  // 10

*/

exports.define = function() {
	switch (arguments.length) {
		case 1:
			define(exports, arguments[0], null);
		break;
		case 2:
			if (typeof arguments[0] === 'object') {
				define(arguments[0], arguments[1], null);
			} else {
				define(exports, arguments[0], arguments[1]);
			}
		break;
		case 3:
			define(arguments[0], arguments[1], arguments[2]);
		break;
	}
};

function define(scope, name, value) {
	Object.defineProperty(scope, name, {
		value: value,
		writable: false
	});
}

