// Schema + Type JS Problem

// input: '5', { type: string } - true
// input: 5, { type: number } - true
// input: [], { type: array, input: { type: 'string' } } - true


const validateSchema = {
  string: (s) => typeof s === 'string',
  number: (n, schema) => {
    if (!schema) return typeof n === 'number';
    const { min, max } = schema;
    const expression = min && max ? (min < n && n < max) : (min && !max ? n < min : n > min);

    return typeof n === 'number' && expression;
  },
  array: (n) => {
    return Array.isArray(n);
  },
  object: (n) => typeof n === 'object',
}

console.log(
  'String Validation:', validateSchema.string('5'), // true
  'Number Validation:', validateSchema.number(5), // true
  'Array Validation:', validateSchema.array([1,2,3]), // true
  'Object Validation:', validateSchema.object({ num: 5 }), // true
)

console.log(
  'Number Validation:', validateSchema.number(5, { min: 1, max: 10}), // true
)