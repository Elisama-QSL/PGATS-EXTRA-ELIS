//Bibliotecas que estão sendo utilizadas
const request = require('supertest');
const sino = require('sinon');
const { expect } = require('chai');

//Chamando a plicação
const app = require('../../app');
const userService = require('../../service/userService');

//Teste
describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it('Quando uso dados válidos o retorno será 201', () => {
            
        })
    });
});
