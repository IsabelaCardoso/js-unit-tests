/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof(Object.entries(productDetails('Alcool', 'Máscara'))), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.entries(productDetails('Alcool', 'Máscara')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('Alcool', 'Máscara'), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notEqual(Object.entries(productDetails('Alcool', 'Máscara')), true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(productDetails('Alcool', 'Máscara')[0].details.productId.endsWith('123') && productDetails('Alcool', 'Máscara')[1].details.productId.endsWith('123'), true)
  });
});
