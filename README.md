# ts-type-detector

![Workflow](https://github.com/paxa1887/ts-type-detector/actions/workflows/main.yml/badge.svg)
[![Codecov](https://codecov.io/gh/paxa1887/ts-type-detector/graph/badge.svg?token=S6U22KXOKW)](https://codecov.io/gh/paxa1887/ts-type-detector) [![NPM Monthly Downloads](https://img.shields.io/npm/dm/ts-type-detector.svg?style=flat)](https://www.npmjs.com/package/ts-type-detector)
[![Install Size](https://packagephobia.com/badge?p=ts-type-detector)](https://packagephobia.com/result?p=ts-type-detector) [![Known Vulnerabilities](https://snyk.io/test/github/paxa1887/ts-type-detector/badge.svg)](https://snyk.io/test/github/paxa1887/ts-type-detector)

Get a detailed kind descriptor of a value, including arrays, functions, and custom objects.

## Intro

The ts-type-detector library is a versatile utility for JavaScript and TypeScript developers to determine the kind or type of a given value. It offers a comprehensive set of functions to check various aspects of a value, helping you write more robust and error-resistant code.

## Usage

##### `import { complexDivision } from 'ts-type-detector';`

```TypeScript
const result = type_detector(undefined);
//=> 'undefined'

const result = type_detector(null);
//=> 'null'

const result = type_detector(true);
//=> 'boolean'

const result = type_detector(false);
//=> 'boolean'

const result = type_detector(new Buffer(''));
//=> 'buffer'

const result = type_detector(42);
//=> 'number'

const result = type_detector('str');
//=> 'string'

const result = type_detector(arguments);
//=> 'arguments'

const result = type_detector({});
//=> 'object'

const result = type_detector(Object.create(null));
//=> 'object'

const result = type_detector(new Test());
//=> 'object'

const result = type_detector(new Date());
//=> 'date'

const result = type_detector([1, 2, 3]);
//=> 'array'

const result = type_detector(/foo/);
//=> 'regexp'

const result = type_detector(new RegExp('foo'));
//=> 'regexp'

const result = type_detector(new Error('error'));
//=> 'error'

const result = type_detector(function () {});
//=> 'function'

const result = type_detector(function * () {});
//=> 'generatorfunction'

const result = type_detector(Symbol('str'));
//=> 'symbol'

const result = type_detector(new Map());
//=> 'map'

const result = type_detector(new WeakMap());
//=> 'weakmap'

const result = type_detector(new Set());
//=> 'set'

const result = type_detector(new WeakSet());
//=> 'weakset'

const result = type_detector(new Int8Array());
//=> 'int8array'

const result = type_detector(new Uint8Array());
//=> 'uint8array'

const result = type_detector(new Uint8ClampedArray());
//=> 'uint8clampedarray'

const result = type_detector(new Int16Array());
//=> 'int16array'

const result = type_detector(new Uint16Array());
//=> 'uint16array'

const result = type_detector(new Int32Array());
//=> 'int32array'

const result = type_detector(new Uint32Array());
//=> 'uint32array'

const result = type_detector(new Float32Array());
//=> 'float32array'

const result = type_detector(new Float64Array());
//=> 'float64array'
```
