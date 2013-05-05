/*! <%= componentName %> v0.0.0 - MIT license */

;(function (global) {

'use strict';

/**
 * @param {}
 * @return {}
 * @api public
 */

function <%= componentName %>() {
}

/**
 * Module exports
 */

// common js export
if (typeof exports === 'object') {
    module.exports = <%= componentName %>;
}
// amd export
else if (typeof define === 'function' && define.amd) {
    define(function () {
        return <%= componentName %>;
    });
}
// browser global
else {
    global.<%= componentName %> = <%= componentName %>;
}

}(this));
