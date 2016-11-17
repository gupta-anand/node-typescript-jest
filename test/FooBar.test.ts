///<reference path="../node_modules/@types/jest/index.d.ts"/>
import {Game, foo, bar} from '../src/FooBar';

var target = new Game();

it('Normal Numbers Return Original Number', () => {
  expect(target.generate(1)).toBe('1');
  expect(target.generate(2)).toBe('2');
  expect(target.generate(4)).toBe('4');
});

it('Number Divisible By Three Should Return Foo', () => {
  expect(target.generate(3)).toBe(foo);
  expect(target.generate(9)).toBe(foo);
  expect(target.generate(12)).toBe(foo);
});

it('Number Divisible By Five Should Return Bar', () => {
  expect(target.generate(20)).toBe(bar);
  expect(target.generate(25)).toBe(bar);
  expect(target.generate(35)).toBe(bar);
});

it('Numbers Divisible By Three And Five Should Return FooBar', () => {
  expect(target.generate(30)).toBe(foo+bar);
  expect(target.generate(45)).toBe(foo+bar);
  expect(target.generate(300)).toBe(foo+bar);
});
