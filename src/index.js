/**
 * Created by shuding on 10/5/15.
 * <ds303077135@gmail.com>
 */

'use strict';

var Analogous     = require('./analogous');
var Monochromatic = require('./monochromatic');
var Triad         = require('./triad');
var Complementary = require('./complementary');

module.exports = {
    Analogous:     Analogous,
    Monochromatic: Monochromatic,
    Triad:         Triad,
    Complementary: Complementary
};
