# Projeto Trybesmith

# Contexto

O objetivo do projeto foi desenvolver uma API que faça **CRUD (Create, Read, Update e Delete)** de itens medievais utilizando **Typescript**. A API segue a arquitetura **MSC (Models, Service e Controllers)**, e se conecta a um banco de dados  **MySQL** para executar as operações **CRUD**.

## Tecnologias usadas
* Node.js;
* Express.js;
* Typescript;
* JWT(JSON Web Token);
* MySQL;

## Instalando Dependências

* Clone o repositório:
```bash
git clone git@github.com:caiquequaresmasilva/projeto-trybe-trybesmith.git
``` 

* Entre na pasta do repositório clonado e instale as dependências:

```bash
cd projeto-trybe-trybesmith
npm install
``` 


## Executando a aplicação


Para rodar a API, é necessário configurar as variáveis de ambiente no arquivo `.env`

```
MYSQL_HOST=dbhost # Host do banco de dados
MYSQL_USER=root # Usuário de acesso ao banco de dados
MYSQL_PASSWORD=senharoot # Senha do usuário
PORT=3000 # Porta de comunicação da API
JWT_SECRET=safeSecret #Chave para autenticação de usuário do JWT
``` 
---

* Feitas as devidas configurações, execute o script:
```bash
npm start
``` 

A API pode ser acessada pelo endereço http://localhost:3000/, ou por outra porta configurada.

---
