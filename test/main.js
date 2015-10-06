/**
 * Created by shuding on 10/6/15.
 * <ds303077135@gmail.com>
 */

'use strict';

var assert = require('assert');

var Colorwheel = require('../src/');
var List       = require('../src/list');

describe('colorwheel', function () {
    describe('color', function () {
        it('should creates color object and get correct rgb values', function () {
            var color = new Colorwheel('#7743CE');
            assert.deepEqual(color.rgb(), {
                r: 119,
                g: 67,
                b: 206
            });
        });
        it('should creates color with english words', function () {
            var color = new Colorwheel('red');
            assert.deepEqual(color.rgb(), {
                r: 255,
                g: 0,
                b: 0
            });
        });
        it('should manipulates colors by chaining', function () {
            var color = new Colorwheel('red');
            assert.deepEqual(color.green(100).whiten(0.1).darken(0.5).rotate(-90).rgb(), {
                r: 115,
                g: 0,
                b: 128
            });
        });
    });

    describe('list and chaining', function () {
        it('should manipulates color list by chaining', function () {
            var color = new List(new Colorwheel('red'), new Colorwheel('#F21c4b'));
            assert.deepEqual(color.green(100).whiten(0.1).darken(0.5).rotate(-90).rgb(), [{
                r: 115,
                g: 0,
                b: 128
            }, {
                r: 103,
                g: 11,
                b: 152
            }]);
        });
    });
});
