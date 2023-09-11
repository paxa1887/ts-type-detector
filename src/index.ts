/**
 * A function to get the type name of a given value.
 *
 * @param value - The value whose type name needs to be determined.
 * @returns The type name as a string.
 */
export function whoami(value: unknown): string {
  // Checking for undefined and null values
  if (value === undefined) return 'undefined';
  if (value === null) return 'null';

  const type = typeof value;

  // Switching on basic types
  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
      return type;
    case 'function':
      // Distinguishing between a normal function and a generator function
      return isGeneratorFn(value) ? 'generatorfunction' : 'function';
    case 'object':
      // If type is object, further checking the object's constructor or type
      if (isArray(value)) return 'array';
      if (isBuffer(value)) return 'buffer';
      if (isArguments(value)) return 'arguments';
      if (isDate(value)) return 'date';
      if (isError(value)) return 'error';
      if (isRegexp(value)) return 'regexp';
      return objectTypeName(value) || type;
  }

  return type;
}

/**
 * Checks if the given value is a generator function.
 *
 * @param value - The value to check.
 * @returns True if the value is a generator function, false otherwise.
 */
function isGeneratorFn(value: unknown): boolean {
  const GeneratorFunctionConstructor = Object.getPrototypeOf(function* () {}).constructor;
  return value != null && value.constructor === GeneratorFunctionConstructor;
}

/**
 * Determines the object type name or constructor name of a given value.
 *
 * @param value - The value to check.
 * @returns The type name as a string or null if it cannot be determined.
 */
function objectTypeName(value: unknown): string | null {
  const objectType = Object.prototype.toString.call(value);
  const ctorNameVal = ctorName(value);

  switch (objectType) {
    case '[object Object]':
      return 'object';
    case '[object Map Iterator]':
      return 'mapiterator';
    case '[object Set Iterator]':
      return 'setiterator';
    case '[object String Iterator]':
      return 'stringiterator';
    case '[object Array Iterator]':
      return 'arrayiterator';
    case '[object Generator]':
      return 'generator';
    default:
      return ctorNameVal ? ctorNameVal.toLowerCase() : null;
  }
}

/**
 * Gets the constructor name of the given value.
 *
 * @param value - The value to check.
 * @returns The constructor name as a string or null if it cannot be determined.
 */
function ctorName(value: unknown): string | null {
  return value && typeof value === 'object' && value.constructor ? value.constructor.name.toLowerCase() : null;
}

/**
 * Checks if the given value is an array.
 *
 * @param value - The value to check.
 * @returns True if the value is an array, false otherwise.
 */
function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

/**
 * Checks if the given value is an error object.
 *
 * @param value - The value to check.
 * @returns True if the value is an error object, false otherwise.
 */
function isError(value: unknown): value is Error {
  return value instanceof Error;
}

/**
 * Checks if the given value is a date object.
 *
 * @param value - The value to check.
 * @returns True if the value is a date object, false otherwise.
 */
function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

/**
 * Checks if the given value is a regular expression object.
 *
 * @param value - The value to check.
 * @returns True if the value is a regular expression object, false otherwise.
 */
function isRegexp(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

/**
 * Checks if the given value is an arguments object.
 *
 * @param value - The value to check.
 * @returns True if the value is an arguments object, false otherwise.
 */
function isArguments(value: unknown): boolean {
  return Object.prototype.toString.call(value) === '[object Arguments]';
}

/**
 * Checks if the given value is a buffer.
 *
 * @param value - The value to check.
 * @returns True if the value is a buffer, false otherwise.
 */
function isBuffer(value: unknown): boolean {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer(value);
}
