/**
 * Created by shuding on 10/5/15.
 * <ds303077135@gmail.com>
 */

'use strict';

var List = require('./list');

function Complementary(color) {
    if (!(this instanceof Complementary)) {
        return new Complementary(color);
    }

    this.color = color;
}

/**
 * List complementary colors
 * @returns {Array}
 */
Complementary.prototype.list = function () {
    return new List(this.color.clone(), this.color.clone().rotate(180));
};

module.exports = Complementary;
