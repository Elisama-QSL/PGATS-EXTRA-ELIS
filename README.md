# API de Transferências

Esta API permite registrar usuários, realizar login, consultar usuários e realizar transferências de valores entre usuários. O banco de dados é em memória, ideal para testes e automação de APIs.

## Instalação

1. Instale as dependências:
   ```powershell
   npm install express swagger-ui-express
   ```

2. Inicie o servidor:
   ```powershell
   node server.js
   ```

## Endpoints

- `POST /register`: Registra um novo usuário. Campos obrigatórios: `username`, `password`. Opcional: `favorecidos` (array de usernames).
- `POST /login`: Realiza login. Campos obrigatórios: `username`, `password`.
- `GET /users`: Lista todos os usuários.
- `POST /transfer`: Realiza transferência. Campos obrigatórios: `remetente`, `destinatario`, `valor`.
- `GET /transfers`: Lista todas as transferências.
- `GET /api-docs`: Documentação Swagger da API.

## Regras de Negócio

- Não é permitido registrar usuários duplicados.
- Login exige usuário e senha válidos.
- Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.
- O saldo inicial de cada usuário é R$ 10.000,00.

## Testes

Para testar a API com Supertest, importe o `app.js` em seu teste sem executar o método `listen()`.

## Documentação

Acesse `/api-docs` para visualizar e testar os endpoints via Swagger.
