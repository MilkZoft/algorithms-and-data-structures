// Adding babel support
require('babel-register');

// Global methods
global.assert = require('chai').assert;

// Console.log colors
global.cyan = '\x1b[36m%s\x1b[0m';
global.yellow = '\x1b[33m';
global.blue = '\x1b[34m';
global.green = '\x1b[32m';
global.red = '\x1b[31m';
global.magenta = '\x1b[35m';
