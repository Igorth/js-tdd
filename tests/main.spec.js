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
  let arr;
  // roda uma vez, antes do bloco
  before(() => {
    // iniciar a conexao ao banco de dados
    // criar um conjunto de dados
  });

  // roda uma vez, depois do bloco
  after(() => {
    // encerrar a conexao ao banco de dados
    // apagar o conjunto de dados
  });

  // roda todas as vez, antes de CADA bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // roda todas as vez, depois de CADA bloco
  afterEach(() => {

  });

  it('should have a size of 4 when push another valueto the array', () => {
    arr.push(4);
    console.log(arr.length);
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    console.log(arr.length);
  });

  it('should remove the value 3 when use pop in the array', () => {
    console.log(arr.pop() === 3);
  });
});
