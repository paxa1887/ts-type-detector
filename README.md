# ts-type-detector

![Workflow](https://github.com/paxa1887/ts-type-detector/actions/workflows/main.yml/badge.svg)
[![Codecov](https://codecov.io/gh/paxa1887/ts-type-detector/graph/badge.svg?token=S6U22KXOKW)](https://codecov.io/gh/paxa1887/ts-type-detector) [![NPM Monthly Downloads](https://img.shields.io/npm/dm/ts-type-detector.svg?style=flat)](https://www.npmjs.com/package/ts-type-detector)
[![Install Size](https://packagephobia.com/badge?p=ts-type-detector)](https://packagephobia.com/result?p=ts-type-detector) [![Known Vulnerabilities](https://snyk.io/test/github/paxa1887/ts-type-detector/badge.svg)](https://snyk.io/test/github/paxa1887/ts-type-detector)

Takes any JavaScript data type or object as an input and returns a string describing the type of the input.

## Intro

The ts-type-detector library is help to identify the data type of the input provided to it. This document outlines how to use the API, including the available methods, request parameters, and response formats.

## Usage

##### `import whoami from 'ts-type-detector';`

## Overview

## Method: `whoami(input)`

### Description

The `whoami` function takes any JavaScript data type or object as an input and returns a string describing the type of the input.

### Parameters

- `input` (any): The input parameter whose type needs to be identified.

### Returns

- `(string)`: A string describing the type of the input. Possible return values include:
  - `'undefined'`
  - `'null'`
  - `'boolean'`
  - `'number'`
  - `'string'`
  - `'array'`
  - `'object'`
  - `'buffer'`
  - `'date'`
  - `'regexp'`
  - `'function'`
  - `'error'`
  - `'promise'`
  - `'generatorfunction'`
  - `'generator'`
  - `'map'`
  - `'weakmap'`
  - `'set'`
  - `'weakset'`
  - `'setiterator'`
  - `'mapiterator'`
  - `'arrayiterator'`
  - `'stringiterator'`
  - `'symbol'`
  - `'int8array'`
  - `'uint8array'`
  - `'uint8clampedarray'`
  - `'int16array'`
  - `'uint16array'`
  - `'int32array'`
  - `'uint32array'`
  - `'float32array'`
  - `'float64array'`

### Examples

```javascript
const result = whoami(undefined);
//=> 'undefined'

const result = whoami(null);
//=> 'null'

const result = whoami(true);
//=> 'boolean'

const result = whoami(false);
//=> 'boolean'

const result = whoami(new Buffer(''));
//=> 'buffer'

const result = whoami(42);
//=> 'number'

const result = whoami('str');
//=> 'string'

const result = whoami(arguments);
//=> 'arguments'

const result = whoami({});
//=> 'object'

const result = whoami(Object.create(null));
//=> 'object'

const result = whoami(new Test());
//=> 'object'

const result = whoami(new Date());
//=> 'date'

const result = whoami([1, 2, 3]);
//=> 'array'

const result = whoami(/foo/);
//=> 'regexp'

const result = whoami(new RegExp('foo'));
//=> 'regexp'

const result = whoami(new Error('error'));
//=> 'error'

const result = whoami(function () {});
//=> 'function'

const result = whoami(function * () {});
//=> 'generatorfunction'

const result = whoami(Symbol('str'));
//=> 'symbol'

const result = whoami(new Map());
//=> 'map'

const result = whoami(new WeakMap());
//=> 'weakmap'

const result = whoami(new Set());
//=> 'set'

const result = whoami(new WeakSet());
//=> 'weakset'

const result = whoami(new Int8Array());
//=> 'int8array'

const result = whoami(new Uint8Array());
//=> 'uint8array'

const result = whoami(new Uint8ClampedArray());
//=> 'uint8clampedarray'

const result = whoami(new Int16Array());
//=> 'int16array'

const result = whoami(new Uint16Array());
//=> 'uint16array'

const result = whoami(new Int32Array());
//=> 'int32array'

const result = whoami(new Uint32Array());
//=> 'uint32array'

const result = whoami(new Float32Array());
//=> 'float32array'

const result = whoami(new Float64Array());
//=> 'float64array'
```

### Error Handling
If an unsupported data type or object is passed, it may return 'unknown' or throw an error.
