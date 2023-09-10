import { add } from '../src/add';
import { describe, expect } from '@jest/globals';

describe('Add function', function () {
  it('return sum two numbers', function () {
    const a = 4,
      b = 3,
      result = 7;
    expect(add(a, b) == result);
  });
});
