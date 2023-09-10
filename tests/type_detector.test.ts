import { type_detector } from '../src/type_detector';
import { describe, expect } from '@jest/globals';

describe('Add function', function () {
  describe('type_detector', function () {
    describe('null and undefined', function () {
      it('should work for undefined', function () {
        expect(type_detector(undefined)).toBe('undefined');
      });
      it('should work for null', function () {
        expect(type_detector(null)).toBe('null');
      });
    });
    describe('primitives', function () {
      it('should work for booleans', function () {
        expect(type_detector(true)).toBe('boolean');
        expect(type_detector(false)).toBe('boolean');
      });

      it('should work for numbers', function () {
        expect(type_detector(42)).toBe('number');
      });

      it('should work for strings', function () {
        expect(type_detector('str')).toBe('string');
      });
    });
    describe('objects', function () {
      it('should work for arguments', function () {
        (() => {
          expect(type_detector(arguments)).toBe('arguments');
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

        expect(type_detector(instance)).toBe('object');
        expect(type_detector(literal)).toBe('object');
        expect(type_detector(createdNull)).toBe('object');
        expect(type_detector(createdObj)).toBe('object');
      });

      it('should work for buffers', function () {
        expect(type_detector(new Buffer(''))).toBe('buffer');
      });

      it('should work for dates', function () {
        expect(type_detector(new Date())).toBe('date');
      });

      it('should work for arrays', function () {
        expect(type_detector([])).toBe('array');
        expect(type_detector([1, 2, 3])).toBe('array');
        expect(type_detector([])).toBe('array');
      });

      it('should work for regular expressions', function () {
        expect(type_detector(/./)).toBe('regexp');
        expect(type_detector(new RegExp('^foo$'))).toBe('regexp');
      });

      it('should work for functions', function () {
        expect(type_detector(function () {})).toBe('function');
        expect(type_detector(new Function())).toBe('function');
      });

      it('should work for Errors', function () {
        expect(type_detector(new Error(''))).toBe('error');
      });
    });
    describe('es6 features', function () {
      it('should work for resolved promises', function () {
        const promise = Promise.resolve(123);
        expect(type_detector(promise)).toBe('promise');
      });

      it('should work for rejected promises', function () {
        const promise = Promise.reject(new Error('foo bar'));
        promise.catch(function () {});
        expect(type_detector(promise)).toBe('promise');
      });

      it('should work for generator functions', function () {
        const gen = function* named() {
          yield true;
        };
        expect(type_detector(gen)).toBe('generatorfunction');
      });

      it('should work for generator objects', function () {
        const gen = function* named() {
          yield true;
        };
        expect(type_detector(gen())).toBe('generator');
      });

      it('should work for template strings', function () {
        const name = 'Foo';
        expect(type_detector(`Welcome ${name} buddy`)).toBe('string');
      });

      it('should work for Map', function () {
        const map = new Map();
        expect(type_detector(map)).toBe('map');
        expect(type_detector(map.set)).toBe('function');
        expect(type_detector(map.get)).toBe('function');
      });

      it('should work for WeakMap', function () {
        const weakmap = new WeakMap();
        expect(type_detector(weakmap)).toBe('weakmap');
        expect(type_detector(weakmap.set)).toBe('function');
        expect(type_detector(weakmap.get)).toBe('function');
      });

      it('should work for Set', function () {
        const set = new Set();
        expect(type_detector(set)).toBe('set');
        expect(type_detector(set.add)).toBe('function');
      });

      it('should work for WeakSet', function () {
        const weakset = new WeakSet();
        expect(type_detector(weakset)).toBe('weakset');
        expect(type_detector(weakset.add)).toBe('function');
      });

      it('should work for Set Iterator', function () {
        const SetValuesIterator = new Set().values();
        expect(type_detector(SetValuesIterator)).toBe('setiterator');
      });
      it('should work for Map Iterator', function () {
        const MapValuesIterator = new Map().values();
        expect(type_detector(MapValuesIterator)).toBe('mapiterator');
      });
      it('should work for Array Iterator', function () {
        const ArrayEntriesIterator = [].entries();
        expect(type_detector(ArrayEntriesIterator)).toBe('arrayiterator');
      });
      it('should work for String Iterator', function () {
        const StringCharIterator = ''[Symbol.iterator]();
        expect(type_detector(StringCharIterator)).toBe('stringiterator');
      });

      it('should work for Symbol', function () {
        expect(type_detector(Symbol('foo'))).toBe('symbol');
        expect(type_detector(Symbol.prototype)).toBe('symbol');
      });

      it('should work for Int8Array', function () {
        const int8array = new Int8Array();
        expect(type_detector(int8array)).toBe('int8array');
      });

      it('should work for Uint8Array', function () {
        const uint8array = new Uint8Array();
        expect(type_detector(uint8array)).toBe('uint8array');
      });

      it('should work for Uint8ClampedArray', function () {
        const uint8clampedarray = new Uint8ClampedArray();
        expect(type_detector(uint8clampedarray)).toBe('uint8clampedarray');
      });

      it('should work for Int16Array', function () {
        const int16array = new Int16Array();
        expect(type_detector(int16array)).toBe('int16array');
      });

      it('should work for Uint16Array', function () {
        const uint16array = new Uint16Array();
        expect(type_detector(uint16array)).toBe('uint16array');
      });

      it('should work for Int32Array', function () {
        const int32array = new Int32Array();
        expect(type_detector(int32array)).toBe('int32array');
      });

      it('should work for Uint32Array', function () {
        const uint32array = new Uint32Array();
        expect(type_detector(uint32array)).toBe('uint32array');
      });

      it('should work for Float32Array', function () {
        const float32array = new Float32Array();
        expect(type_detector(float32array)).toBe('float32array');
      });

      it('should work for Float64Array', function () {
        const float64array = new Float64Array();
        expect(type_detector(float64array)).toBe('float64array');
      });
    });
  });
});
