/* eslint-disable no-undef */
// npm test -- --bail => stop in the first case of error
// describe('Main', () => {
//   describe('Method A', () => {
//     context('Case 1', () => {
//       it.skip('should happen something', () => {
//         // espera o que aconteça
//         // espera de dados / metodo sum(2,2)
//         // espera retornar (4) => true | (3) => false => broken test
//         throw new Error('just an error');
//       });
//     });

//     context('Case 2', () => {
//       it('should happen otherthing', () => {
//         throw new Error('just an error');
//       });
//       it('should happen blablabla', () => {

//       });
//     });
//   });

//   describe('Method B', () => {

//   });
// });


describe('Main', () => {
  // roda uma vez, antes do bloco
  before(() => {
    console.log('before');
  });

  // roda uma vez, depois do bloco
  after(() => {
    console.log('after');
  });

  // roda todas as vez, antes de CADA bloco
  beforeEach(() => {
    console.log('beforeEach');
  });

  // roda todas as vez, depois de CADA bloco
  afterEach(() => {
    console.log('afterEach');
  });

  it('test 1', () => {
    console.log('test 1');
  });

  it('test 2', () => {
    console.log('test 2');
  });
});
