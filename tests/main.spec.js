/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
describe('Main', function () {
  // describe.skip('Method A', function () {
  //   context('Case 1 ', function () {
  //     it('should happen blabla', () => {
  //       // espero que aconteca
  //     });
  //   });
  //   context('Case 2', function () {
  //     it('should happen blabla', () => {
  //       // espero que aconteca
  //       throw new Error('just an error');
  //     });
  //     it('should happen mimimi', () => {
  //       // espero que aconteca
  //       throw new Error('just an error');
  //     });
  //   });
  // });

  describe('Method B', function () {
    // hooks
    let arr = [];
    before(function () {
      // roda uma vez, antes do bloco
      // inicia conexao com banco
      // cria base de dados
    });

    after(function () {
      // roda uma vez, dps do bloco
      // fecha conexao com o banco
      // apaga base de dados
    });

    beforeEach(function () {
      // roda tds vezes, antes do bloco
      arr = [1, 2, 3];
    });

    afterEach(function () {
      // roda rds vezes, depois do bloco
    });

    it('should have a size of 4 when push another value to the array', function () {
      // const arr = [1, 2, 3];
      arr.push(4); // 4
    });

    it('should have a size of 2 when pop a value to the array', () => {
      // const arr = [1, 2, 3];
      arr.pop(3); // 2
    });

    it('should remove the value 3 when use pop in the array', () => {
      // const arr = [1, 2, 3];
      console.log(arr.pop() === 3); // true
    });
  });
});
