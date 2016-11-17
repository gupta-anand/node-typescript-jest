"use strict";
exports.foo = 'Foo';
exports.bar = 'Bar';
class Game {
    generate(input) {
        var output = '';
        if (input % 3 === 0) {
            output += exports.foo;
        }
        if (input % 5 === 0) {
            output += exports.bar;
        }
        return output === '' ? input.toString() : output;
    }
}
exports.Game = Game;
