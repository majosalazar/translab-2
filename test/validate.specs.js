const assert = require('chai').assert;
global.window = global;
require('../src/js/validate'); // enlaza el archivo

describe('validar emails', () => { //describe lo que habrá en cada función
  describe('debe verificar que exista el arroba', () => {
    it('el correo debe tener solo un arroba', () => { 
      assert.equal(validateEmail("asdf@asdf.com"), true); //assert.equal verifica que el paremetro 1 sea igual al parametro 2
      assert.equal(validateEmail("asdf@@asdf.com"), false);
      assert.equal(validateEmail("asdf.com"), false);
    });
    it('el correo debe tener un arroba antes del dominio', () => {
      assert.equal(validateEmail(".com@asdf"), false);
      assert.equal(validateEmail("maria@woukit.cl"), true);
    });
  });(
  describe('debe verificar si tiene un dominio', () => {
    it('tiene un punto y luego solo caracteres del alfabeto', () => {
      assert.equal(validateEmail("asdf@asdf"), false);
      assert.equal(validateEmail("asdf@asdf."), false);
      assert.equal(validateEmail("asdf@#$%&"), false);
    });
  }));(
  describe('verifica que tenga al menos un caracter antes del arroba', () => {
    it('verifica que tenga almenos 1 caracter antes del arroba', () => {
      assert.equal(validateEmail("a@asdf.com"), true);
    });
  }));
});