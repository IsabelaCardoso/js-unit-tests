/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.
*/

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(), checa se o retorno da função é um objeto no seguinte formato: { fetchMenu: objetoQualquer }.
    const anyObject = { food: {}, drink: {} };
    const returnedObject = createMenu(anyObject);

    assert.deepStrictEqual(createMenu(anyObject).fetchMenu, anyObject);

    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, verifique que 'objetoRetornado.fetchMenu' retorna um objeto cujas chaves são somente `food` e `drink`.
    assert.deepStrictEqual(returnedObject.fetchMenu, { food: {}, drink: {}});

    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    const anyObject3 = { food: {}, drink: {} };
    const returnedObject3 = createMenu(anyObject);
    assert.deepStrictEqual(returnedObject3.fetchMenu, anyObject3);

    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    assert.deepStrictEqual(returnedObject.consumption, [])

    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // requisito 5 e 8 feitos com a ajuda da Jessica Paula
    assert.deepStrictEqual(returnedObject.order('coxinha').consumption, ['coxinha']);

    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    const returnedObject6 = createMenu();

    returnedObject6.order('coxinha');
    returnedObject6.order('agua');
    returnedObject6.order('sopa');
    returnedObject6.order('sashimi');
    assert.deepStrictEqual(returnedObject6.consumption, ["coxinha", "agua", "sopa", "sashimi"])

    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    const returnedObject7 = createMenu();

    returnedObject7.order('coxinha');
    returnedObject7.order('agua');
    returnedObject7.order('coxinha');
    assert.deepStrictEqual(returnedObject7.consumption, ["coxinha", "agua", "coxinha"])

    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    const returnedObject8 = createMenu();
    createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9, 'sashimi': 12.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });

    returnedObject8.order('coxinha');
    returnedObject8.order('agua');
    returnedObject8.order('cerveja');
    assert.deepStrictEqual(returnedObject8.pay(), 14.70)
  });
});
