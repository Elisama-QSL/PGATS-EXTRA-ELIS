//Bibliotecas que estão sendo utilizadas
const request = require('supertest');
const sino = require('sinon');
const { expect } = require('chai');

//Chamando a plicação
const app = require('../app');
const userService = require('../service/userService');

//Teste
//Criando minha função de validação
describe ('Validando o Login', () =>{
    describe('POST /Login', () => {
            beforeEach(() => {
                // Limpa o banco de usuários antes de cada teste
                userService.getUsers().length = 0;
            });
        //Primeiro Teste
        it('Dados válidos, o retorno será 200', async () => {
            // Registra o usuário no banco para realizar o teste
            userService.registerUser({ username: "Marta", password: "2025", favorecidos: [] });
            //Usando o supertest para fazer requisições na minha API
            const resposta = await request(app)
                .post('/login')
                .send({
                    username: "Marta",
                    password: "2025"
                });
             expect(resposta.status).to.equal(200);
        });


        //Segundo Teste
        it('Username inválidos, o retorno será 401', async () => {
            //Usando o supertest para fazer requisições na minha API
            const resposta = await request(app)
                //Chamado meu post login
                .post('/login')
                //Passando os parâmetros
                .send({
                    username: "Lucas",
                    password: "2025"
                });

                //Exibir a resposta obitida utilizando o chai
                expect(resposta.status).to.equal(401);

        });

         //Terceiro Teste
        it('Password inválidos, o retorno será 401', async () => {
            //Usando o supertest para fazer requisições na minha API
            const resposta = await request(app)
                //Chamado meu post login
                .post('/login')
                //Passando os parâmetros
                .send({
                    username: "Lucas",
                    password: "***"
                });

                //Exibir a resposta obitida utilizando o chai
                expect(resposta.status).to.equal(401);

        });

        //Quarto Teste
        it('Dados em branco, o retorno será 401', async () => {
            //Usando o supertest para fazer requisições na minha API
            const resposta = await request(app)
                //Chamado meu post login
                .post('/login')
                //Passando os parâmetros
                .send({
                    username: " ",
                    password: " "
                });

                //Exibir a resposta obitida utilizando o chai
                expect(resposta.status).to.equal(401);

        });

         //Quinto Teste
        it('Username e Password inválidos, o retorno será 401', async () => {
            //Usando o supertest para fazer requisições na minha API
            const resposta = await request(app)
                //Chamado meu post login
                .post('/login')
                //Passando os parâmetros
                .send({
                    username: "Renata",
                    password: "1234"
                });

                //Exibir a resposta obitida utilizando o chai
                expect(resposta.status).to.equal(401);

        });



    });
})