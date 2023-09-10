import { describe, expect } from '@jest/globals';
import { whoami } from '../src/index';

describe('Add function', function () {
  describe('type_detector', function () {
    describe('null and undefined', function () {
      it('should work for undefined', function () {
        expect(whoami(undefined)).toBe('undefined');
      });
      it('should work for null', function () {
        expect(whoami(null)).toBe('null');
      });
    });
    describe('primitives', function () {
      it('should work for booleans', function () {
        expect(whoami(true)).toBe('boolean');
        expect(whoami(false)).toBe('boolean');
      });

      it('should work for numbers', function () {
        expect(whoami(42)).toBe('number');
      });

      it('should work for strings', function () {
        expect(whoami('str')).toBe('string');
      });
    });
    describe('objects', function () {
      it('should work for arguments', function () {
        (() => {
          expect(whoami(arguments)).toBe('arguments');
        })();
      });

      it('should work for objects', function () {
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

      it('should work for buffers', function () {
        expect(whoami(new Buffer(''))).toBe('buffer');
      });

      it('should work for dates', function () {
        expect(whoami(new Date())).toBe('date');
      });

      it('should work for arrays', function () {
        expect(whoami([])).toBe('array');
        expect(whoami([1, 2, 3])).toBe('array');
        expect(whoami([])).toBe('array');
      });

      it('should work for regular expressions', function () {
        expect(whoami(/./)).toBe('regexp');
        expect(whoami(new RegExp('^foo$'))).toBe('regexp');
      });

      it('should work for functions', function () {
        expect(whoami(function () {})).toBe('function');
        expect(whoami(new Function())).toBe('function');
      });

      it('should work for Errors', function () {
        expect(whoami(new Error(''))).toBe('error');
      });
    });
    describe('es6 features', function () {
      it('should work for resolved promises', function () {
        const promise = Promise.resolve(123);
        expect(whoami(promise)).toBe('promise');
      });

      it('should work for rejected promises', function () {
        const promise = Promise.reject(new Error('foo bar'));
        promise.catch(function () {});
        expect(whoami(promise)).toBe('promise');
      });

      it('should work for generator functions', function () {
        const gen = function* named() {
          yield true;
        };
        expect(whoami(gen)).toBe('generatorfunction');
      });

      it('should work for generator objects', function () {
        const gen = function* named() {
          yield true;
        };
        expect(whoami(gen())).toBe('generator');
      });

      it('should work for template strings', function () {
        const name = 'Foo';
        expect(whoami(`Welcome ${name} buddy`)).toBe('string');
      });

      it('should work for Map', function () {
        const map = new Map();
        expect(whoami(map)).toBe('map');
        expect(whoami(map.set)).toBe('function');
        expect(whoami(map.get)).toBe('function');
      });

      it('should work for WeakMap', function () {
        const weakmap = new WeakMap();
        expect(whoami(weakmap)).toBe('weakmap');
        expect(whoami(weakmap.set)).toBe('function');
        expect(whoami(weakmap.get)).toBe('function');
      });

      it('should work for Set', function () {
        const set = new Set();
        expect(whoami(set)).toBe('set');
        expect(whoami(set.add)).toBe('function');
      });

      it('should work for WeakSet', function () {
        const weakset = new WeakSet();
        expect(whoami(weakset)).toBe('weakset');
        expect(whoami(weakset.add)).toBe('function');
      });

      it('should work for Set Iterator', function () {
        const SetValuesIterator = new Set().values();
        expect(whoami(SetValuesIterator)).toBe('setiterator');
      });
      it('should work for Map Iterator', function () {
        const MapValuesIterator = new Map().values();
        expect(whoami(MapValuesIterator)).toBe('mapiterator');
      });
      it('should work for Array Iterator', function () {
        const ArrayEntriesIterator = [].entries();
        expect(whoami(ArrayEntriesIterator)).toBe('arrayiterator');
      });
      it('should work for String Iterator', function () {
        const StringCharIterator = ''[Symbol.iterator]();
        expect(whoami(StringCharIterator)).toBe('stringiterator');
      });

      it('should work for Symbol', function () {
        expect(whoami(Symbol('foo'))).toBe('symbol');
        expect(whoami(Symbol.prototype)).toBe('symbol');
      });

      it('should work for Int8Array', function () {
        const int8array = new Int8Array();
        expect(whoami(int8array)).toBe('int8array');
      });

      it('should work for Uint8Array', function () {
        const uint8array = new Uint8Array();
        expect(whoami(uint8array)).toBe('uint8array');
      });

      it('should work for Uint8ClampedArray', function () {
        const uint8clampedarray = new Uint8ClampedArray();
        expect(whoami(uint8clampedarray)).toBe('uint8clampedarray');
      });

      it('should work for Int16Array', function () {
        const int16array = new Int16Array();
        expect(whoami(int16array)).toBe('int16array');
      });

      it('should work for Uint16Array', function () {
        const uint16array = new Uint16Array();
        expect(whoami(uint16array)).toBe('uint16array');
      });

      it('should work for Int32Array', function () {
        const int32array = new Int32Array();
        expect(whoami(int32array)).toBe('int32array');
      });

      it('should work for Uint32Array', function () {
        const uint32array = new Uint32Array();
        expect(whoami(uint32array)).toBe('uint32array');
      });

      it('should work for Float32Array', function () {
        const float32array = new Float32Array();
        expect(whoami(float32array)).toBe('float32array');
      });

      it('should work for Float64Array', function () {
        const float64array = new Float64Array();
        expect(whoami(float64array)).toBe('float64array');
      });
    });
  });
});
