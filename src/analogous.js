/**
 * Created by shuding on 10/5/15.
 * <ds303077135@gmail.com>
 */

'use strict';

function Analogous(color, rotate) {
    if (!(this instanceof Analogous)) {
        return new Analogous(color, rotate);
    }

    this.color  = color;
    this.rotate = rotate;
}

/**
 * list analogous colors by count
 * @param count
 * @returns {Array}
 */
Analogous.prototype.list = function (count) {
    var cnt = 0;
    try {
        cnt = parseInt(arguments[0]);
    } catch (err) {
        return [];
    }

    var scheme = [];
    var rotate = -this.rotate * (cnt - 1) / 2;
    for (var i = 0; i < cnt; ++i) {
        var color = this.color.clone();
        scheme.push(color.rotate(rotate));
        rotate += this.rotate;
    }

    return scheme;
};

module.exports = Analogous;
