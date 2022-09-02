/* eslint-disable no-undef */
const { expect } = require('chai');

describe('Main', () => {
  // hooks
  let arr = [];

  beforeEach(() => {
    // roda tds vezes, antes do bloco
    arr = [1, 2, 3];
  });

  afterEach(() => {
    // roda rds vezes, depois do bloco
  });

  // testar tipos ou se já foram criados (smoke test)
  it('should be an array', () => {
    expect(arr).to.be.an('array');
  });

  it('should have a size of 4 when push another value to the array', () => {
    // const arr = [1, 2, 3];
    arr.push(4); // 4
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove the value 3 when use pop in the array', () => {
    arr.pop(); // true
    expect(arr).to.not.include(3);
  });

  it('should have a size of 2 when pop a value to the array', () => {
    // const arr = [1, 2, 3];
    arr.pop(3); // 2
    expect(arr).to.have.length(2);
  });

  it('should return true when pop 3 from the array', () => {
    expect(arr.pop() === 3).to.be.equal(true);
  });
});
