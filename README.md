+ TypeScript to ES6 transpilation,
+ TSLint with a general recommendation for a good default configuration,
+ Jest unit testing and coverage,
+ Type definitions for Node.js and Jest,
+ .editorconfig for consistent file format.

## Quick start

This project requires Node.js 6.2+ and NPM. Make sure you have those installed. Then just type following commands:

```
git clone https://github.com/gupta-anand/node-typescript-jest.git
cd node-typescript-jest
npm install
```

## Available scripts

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `build` - transpile TypeScript to ES6,
+ `watch` - interactive watch mode to automatically transpile source files, 
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests