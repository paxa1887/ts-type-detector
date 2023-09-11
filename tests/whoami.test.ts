import { describe, expect } from '@jest/globals';
import { whoami } from '../src/index';

// The main test suite describing the functionality of the "whoami" function.
describe('Whoami Function Tests', function () {
  // A suite of tests focusing on the type detection capabilities of the "whoami" function.
  describe('Type Detector Tests', function () {
    // A set of tests to check how the "whoami" function handles null and undefined inputs.
    describe('Null and Undefined Tests', function () {
      // A test to verify that the function correctly identifies 'undefined' as the type.
      it('should identify undefined', function () {
        expect(whoami(undefined)).toBe('undefined');
      });

      // A test to verify that the function correctly identifies 'null' as the type.
      it('should identify null', function () {
        expect(whoami(null)).toBe('null');
      });
    });

    // A set of tests to verify how the "whoami" function handles primitive data types as inputs.
    describe('Primitive Type Tests', function () {
      // Test cases to verify that the function correctly identifies boolean values.
      it('should identify booleans', function () {
        expect(whoami(true)).toBe('boolean');
        expect(whoami(false)).toBe('boolean');
        expect(whoami(new Boolean(true))).toBe('boolean');
      });

      // A test case to verify that the function correctly identifies number values.
      it('should identify numbers', function () {
        expect(whoami(42)).toBe('number');
        expect(whoami(new Number(42))).toBe('number');
      });

      // A test case to verify that the function correctly identifies string values.
      it('should identify strings', function () {
        expect(whoami('str')).toBe('string');
        new String('str');
        expect(whoami(new String('str'))).toBe('string');
      });
    });

    // A suite of tests focusing on how the "whoami" function identifies various types of objects.
    describe('Object Type Tests', function () {
      // A test to verify that the function correctly identifies 'arguments' object type.
      it('should identify arguments object', function () {
        (function (...args) {
          expect(whoami(args)).toBe('array');
        })(1, 2, 3);
      });

      // A series of test cases to verify that the function correctly identifies various object types.
      it('should identify different object types', function () {
        class Test {
          constructor() {}
        }
        const instance = new Test();
        const literal = {};
        const createdNull = Object.create(null);
        const createdObj = Object.create({});

        expect(whoami(instance)).toBe('object');
        expect(whoami(literal)).toBe('object');
        expect(whoami(createdNull)).toBe('object');
        expect(whoami(createdObj)).toBe('object');
      });

      // Additional test cases for identifying various other object types like buffers, dates, arrays, etc.
      // Each case checks if the "whoami" function returns the correct type string.
      it('should identify buffers', function () {
        expect(whoami(new Buffer(''))).toBe('buffer');
      });

      it('should identify dates', function () {
        expect(whoami(new Date())).toBe('date');
      });

      it('should identify arrays', function () {
        expect(whoami([])).toBe('array');
        expect(whoami([1, 2, 3])).toBe('array');
      });

      it('should identify regular expressions', function () {
        expect(whoami(/./)).toBe('regexp');
        expect(whoami(new RegExp('^foo$'))).toBe('regexp');
      });

      it('should identify functions', function () {
        expect(whoami(function () {})).toBe('function');
        expect(whoami(new Function())).toBe('function');
      });

      it('should identify errors', function () {
        expect(whoami(new Error(''))).toBe('error');
      });
    });

    // A series of test cases focusing on how the "whoami" function handles ES6 features.
    describe('ES6 Features Tests', function () {
      // Test cases to verify the identification of promises, both resolved and rejected.
      it('should identify resolved promises', function () {
        const promise = Promise.resolve(123);
        expect(whoami(promise)).toBe('promise');
      });

      it('should identify rejected promises', function () {
        const promise = Promise.reject(new Error('foo bar'));
        promise.catch(function () {});
        expect(whoami(promise)).toBe('promise');
      });

      // Additional test cases focusing on other ES6 features like generators, template strings, and various new data types.
      // Each case checks if the "whoami" function correctly identifies the type.
      it('should identify generator functions', function () {
        const gen = function* named() {
          yield true;
        };
        expect(whoami(gen)).toBe('generatorfunction');
      });

      test('should identify generator objects correctly', () => {
        function* gen() {
          yield 1;
        }
        const generatorObj = gen();
        expect(whoami(generatorObj)).toBe('generator');
      });

      it('should identify template strings', function () {
        const name = 'Foo';
        expect(whoami(`Welcome ${name} buddy`)).toBe('string');
      });

      // Test cases to verify that the function correctly identifies new data structures introduced in ES6 like Map, WeakMap, Set, etc.
      it('should identify Map instances', function () {
        const map = new Map();
        expect(whoami(map)).toBe('map');
        expect(whoami(map.set)).toBe('function');
        expect(whoami(map.get)).toBe('function');
      });

      it('should identify WeakMap instances', function () {
        const weakmap = new WeakMap();
        expect(whoami(weakmap)).toBe('weakmap');
        expect(whoami(weakmap.set)).toBe('function');
        expect(whoami(weakmap.get)).toBe('function');
      });

      it('should identify Set instances', function () {
        const set = new Set();
        expect(whoami(set)).toBe('set');
        expect(whoami(set.add)).toBe('function');
      });

      it('should identify WeakSet instances', function () {
        const weakset = new WeakSet();
        expect(whoami(weakset)).toBe('weakset');
        expect(whoami(weakset.add)).toBe('function');
      });

      // Test cases to verify the identification of various iterator types.
      it('should identify Set Iterator instances', function () {
        const SetValuesIterator = new Set().values();
        expect(whoami(SetValuesIterator)).toBe('setiterator');
      });

      it('should identify Map Iterator instances', function () {
        const MapValuesIterator = new Map().values();
        expect(whoami(MapValuesIterator)).toBe('mapiterator');
      });

      it('should identify Array Iterator instances', function () {
        const ArrayEntriesIterator = [].entries();
        expect(whoami(ArrayEntriesIterator)).toBe('arrayiterator');
      });

      it('should identify String Iterator instances', function () {
        const StringCharIterator = ''[Symbol.iterator]();
        expect(whoami(StringCharIterator)).toBe('stringiterator');
      });

      // Test cases to verify that the function identifies symbols correctly.
      it('should identify Symbol instances', function () {
        expect(whoami(Symbol('foo'))).toBe('symbol');
        expect(whoami(Symbol.prototype)).toBe('symbol');
      });

      // A series of test cases to verify that the function correctly identifies typed arrays.
      it('should identify Int8Array instances', function () {
        const int8array = new Int8Array();
        expect(whoami(int8array)).toBe('int8array');
      });

      it('should identify Uint8Array instances', function () {
        const uint8array = new Uint8Array();
        expect(whoami(uint8array)).toBe('uint8array');
      });

      it('should identify Uint8ClampedArray instances', function () {
        const uint8clampedarray = new Uint8ClampedArray();
        expect(whoami(uint8clampedarray)).toBe('uint8clampedarray');
      });

      it('should identify Int16Array instances', function () {
        const int16array = new Int16Array();
        expect(whoami(int16array)).toBe('int16array');
      });

      it('should identify Uint16Array instances', function () {
        const uint16array = new Uint16Array();
        expect(whoami(uint16array)).toBe('uint16array');
      });

      it('should identify Int32Array instances', function () {
        const int32array = new Int32Array();
        expect(whoami(int32array)).toBe('int32array');
      });

      it('should identify Uint32Array instances', function () {
        const uint32array = new Uint32Array();
        expect(whoami(uint32array)).toBe('uint32array');
      });

      it('should identify Float32Array instances', function () {
        const float32array = new Float32Array();
        expect(whoami(float32array)).toBe('float32array');
      });

      it('should identify Float64Array instances', function () {
        const float64array = new Float64Array();
        expect(whoami(float64array)).toBe('float64array');
      });
    });
  });
});
