'use strict';

const {assert} = require('chai');
const lib = require('../lib.js');

describe('checkUserEmail', ()=>{
  it('should make name from one component email', ()=>{
    const res = lib.emailToName('devil@mail.ru');
    assert.equal(res, 'Devil');
  });
  it('should make name from two components email', ()=>{
    const res = lib.emailToName('vladimir.putin@mail.ru');
    assert.equal(res, 'Vladimir Putin');
  });
});
