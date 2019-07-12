const fs = require('fs');
const chai = require('chai');
const { expect } = require('chai');
const tlds = require('../lib');

describe('dot.tld', () => {
  it('is not empty array', () => {
    expect(tlds).to.be.an('array').that.is.not.empty;
  });

  it('includes com', () => {
    expect(tlds).includes('com');
  });
});
