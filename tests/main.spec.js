/* eslint-disable no-undef */
import { expect } from 'chai';

import {
  sum, sub, div, mult,
} from '../src/main';

describe('Calc', () => {
// smoke test

  describe('Smoke tests', () => {
    it('should exist the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });
    it('should exist the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });
    it('should exist the method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
    it('should exist the method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });
  });
  describe('Sum', () => {
    it('should return 4 when sum (2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });
  describe('Sub', () => {
    it('should return -4 when sub (6,10)', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
    it('should return 4 when sub (6,2)', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
  });
  describe('Div', () => {
    it('should return 4 when div (8,2)', () => {
      expect(div(8, 2)).to.be.equal(4);
    });
    it('should return `impossible` when div (10,0)', () => {
      expect(div(10, 0)).to.be.equal('impossible');
    });
  });
  describe('Mult', () => {
    it('should return 4 when mult (2,2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });
});
