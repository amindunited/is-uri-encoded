/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const isURIEncoded = require('./index');
const expect = require('chai').expect
const expected = 'my_input_name';

describe('Is URI Encoded', () => {

  it('should export a function', () => {
    expect(isURIEncoded).to.be.a('function');
  });

  it('should return false for a basic string', () => {
    expect(isURIEncoded('MyInputName')).to.equal(false);
  });

  it('should return false for a string with spaces', () => {
    expect(isURIEncoded('This could be a message')).to.equal(false);
  });

  it('should return true for a string that is encoded', () => {
    expect(isURIEncoded(encodeURIComponent('This could be a message'))).to.equal(true);
  });

  it('should not return a false positive is the string *looks* encoded', () => {
    expect(isURIEncoded('<%ThisCouldConfuseIt%>')).to.equal(false);
  });

  it('should have a test with 😈  emoji in it', () => {
    expect(isURIEncoded('😈')).to.equal(false);
  });


});
