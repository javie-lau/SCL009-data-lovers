global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filterData', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof 'filterData', 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})
