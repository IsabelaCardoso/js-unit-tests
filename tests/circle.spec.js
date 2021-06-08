const assert = require('assert');
const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

*/

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    // Teste se circle retorna um objeto.
    assert.strictEqual(typeof circle(2), 'object');
    // Teste se o objeto retornado tem 3 entradas.
    assert.deepStrictEqual((Object.entries(circle(6)).length), 3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    assert.strictEqual(circle(), undefined)
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    assert.deepStrictEqual((Object.values(circle(2))[2]), 12.56);
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    assert.deepStrictEqual((Object.values(circle(3))[1]), 28.259999999999998);
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    assert.deepStrictEqual((Object.values(circle(3))), [3, 28.259999999999998, 18.84]);
  });
});
