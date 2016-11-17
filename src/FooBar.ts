export var foo = 'Foo';
export var bar = 'Bar';

export class Game {

  generate(input: number): string {
    var output = '';

    if (input % 3 === 0) {
      output += foo;
    }

    if (input % 5 === 0) {
      output += bar;
    }

    return output === '' ? input.toString() : output;
  }
}
