/**
 * Created by shuding on 10/5/15.
 * <ds303077135@gmail.com>
 */

'use strict';

var Color = require('color');

function List() {
    var a = [];
    a.push.apply(a, arguments);
    a.__proto__ = List.prototype;
    return a;
}

List.prototype = [];

for (var method in Color.prototype) {
    if (Color.prototype.hasOwnProperty(method)) {
        List.prototype[method] = function () {
            var ret = [];
            var arg = arguments;
            this.forEach(function (color) {
                ret.push(color[method].call(color, arg));
            });
            return ret;
        };
    }
}

module.exports = List;
