/**
 * @jest-environment jsdom
 */

///////COMO CONFIGURAR JEST PARA TRABAJAR Y HACER UNA PAGE EN NOTION PARA AUTOMATIZAR EL PROCESO
const {sum} = require('../calculos.js')

describe('La funcion sum deberia sumar dos parametros', () => { 
  test('5 + 3 deberia ser 8', () => {
    expect(sum('5', '3')).toBe(8);
  })
})