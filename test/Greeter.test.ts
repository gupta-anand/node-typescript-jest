///<reference path="../node_modules/@types/jest/index.d.ts"/>
import { greeter } from '../src/Greeter';

it('This test should greet a user', () => {
  expect(greeter('Anand')).toBe('Hello, Anand');
});
