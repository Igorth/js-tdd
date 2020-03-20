/* eslint-disable no-undef */
/*
Escreva uma lib que receba um numero e.

Se o numero for divisivel por 3, no lugar do numero escreva `Fizz`;
Se o numero for divisivel por 5, no lugar do numero escreva `Buzz`;
Se o numero for divisivel por 3 e 5, no lugar do numero escreva `FizzBuzz`;
Se nao for multiplo de nada, retorna o numero

*/

import { expect } from 'chai';
import FizzBuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
  });
});
