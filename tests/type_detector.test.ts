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
        expect(type_detector(new Boolean(true))).toBe('boolean');
      });

      it('should work for numbers', function () {
        expect(type_detector(42)).toBe('number');
        expect(type_detector(new Number(42))).toBe('number');
      });

      it('should work for strings', function () {
        expect(type_detector('str')).toBe('string');
        expect(type_detector(new String('str'))).toBe('string');
      });
    });
  });
});
