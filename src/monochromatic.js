/**
 * Created by shuding on 10/5/15.
 * <ds303077135@gmail.com>
 */

'use strict';

var List = require('./list');

function Monochromatic(color, step) {
    if (!(this instanceof Monochromatic)) {
        return new Monochromatic(color, step);
    }

    this.color = color;
    this.step  = step;
}

/**
 * List monochromatic colors by count
 * @param count
 * @returns {Array}
 */
Monochromatic.prototype.list = function (count) {
    var cnt = 0;
    try {
        cnt = parseInt(arguments[0]);
    } catch (err) {
        return new List();
    }

    var scheme = new List();
    var step   = -this.step * (cnt - 1) / 2;
    for (var i = 0; i < cnt; ++i) {
        var color = this.color.clone();
        scheme.push(color.desaturate(step));
        step += this.step;
    }

    return scheme;
};

module.exports = Monochromatic;
