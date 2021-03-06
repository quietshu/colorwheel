/**
 * Created by shuding on 10/5/15.
 * <ds303077135@gmail.com>
 */

'use strict';

var List = require('./list');

function Triad(color) {
    if (!(this instanceof Triad)) {
        return new Triad(color);
    }

    this.color = color;
}

/**
 * List triad colors
 * @returns {Array}
 */
Triad.prototype.list = function () {
    return new List(this.color.clone().rotate(-120), this.color.clone().rotate(0), this.color.clone().rotate(120));
};

module.exports = Triad;
