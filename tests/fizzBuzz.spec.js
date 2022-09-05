/* eslint-disable no-undef */

/* Desafio FizzBuzz -
    Se for divisivel por 3, retorna `Fizz`
    Se for divisivel por 5, retorna `Buzz`
    Se for os dois casos, retorna `FizzBuzz`
    se n for Fizz nem Buzz retornar o numero
*/
import { expect } from 'chai';
import FizzBuzz from '../src/fizzBuzz';

describe('FizzBuzz', () => {
  it('should  return Fizz', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });
  it('should return Buzz', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });
  it('should return FizzBuzz', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz'); expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
  });
  it('should return the number', () => {
    expect(FizzBuzz(16)).to.be.equal(16);
  });
  it('should return the zero', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
