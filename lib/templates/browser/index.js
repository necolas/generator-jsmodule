/*! <%= moduleName %> v0.0.0 - MIT license */

;(function (global) {

'use strict';

/**
 * @param {}
 * @return {}
 * @api public
 */

function <%= moduleSafeName %>() {
}

/**
 * Module exports
 */

// common js export
if (typeof exports === 'object') {
    module.exports = <%= moduleSafeName %>;
}
// amd export
else if (typeof define === 'function' && define.amd) {
    define(function () {
        return <%= moduleSafeName %>;
    });
}
// browser global
else {
    global.<%= moduleSafeName %> = <%= moduleSafeName %>;
}

}(this));
