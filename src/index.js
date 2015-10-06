/**
 * Created by shuding on 10/5/15.
 * <ds303077135@gmail.com>
 */

'use strict';

var Color = require('color');

var Analogous     = require('./analogous');
var Monochromatic = require('./monochromatic');
var Triad         = require('./triad');
var Complementary = require('./complementary');

function Colorwheel(str) {
    if (!(this instanceof Colorwheel)) {
        return new Colorwheel(str);
    }
    var c = new Color(str);
    c.__proto__ = Colorwheel.prototype;
    return c;
}

Colorwheel.prototype = new Color;

Colorwheel.prototype.analogous = function (rotate, count) {
    return (new Analogous(this, rotate)).list(count || 5);
};

Colorwheel.prototype.monochromatic = function (step, count) {
    return (new Monochromatic(this, step)).list(count || 5);
};

Colorwheel.prototype.triad = function () {
    return (new Triad(this)).list();
};

Colorwheel.prototype.complementary = function () {
    return (new Complementary(this)).list();
};

module.exports = Colorwheel;
