# Post wall assessment

<p>
    <img alt='License' src='https://img.shields.io/badge/license-mit-1C1E26?style=for-the-badge&labelColor=1C1E26&color=077CC7&' />
    <img alt='version' src='https://img.shields.io/badge/version-1.0-1C1E26?style=for-the-badge&labelColor=1C1E26&color=077CC7&' />
</p>

## 💻 O projeto

O projeto consiste em uma aplicação web que simula um mural de postagens, onde o usuário pode criar, editar e excluir postagens, além de poder visualizar as postagens de outros usuários, também é possível escrever, editar e apagar comentários de acordo com a autoria.

## 🛠️ Tecnologias

- **NodeJS**: Ambiente de execução Javascript server-side
- **ReactJS**: Biblioteca para construção de interfaces
- **NextJS 13**: Framework React que permite a renderização do lado do servidor
- **Styled Components**: Biblioteca para estilização de componentes

- **Axios**: Biblioteca para requisições HTTP
- **Express**: Framework utilizado para a criação da API
- **Typescript**: Linguagem tipada que auxilia no desenvolvimento
- **PostgreSQL**: Banco de dados relacional rápido e consitente
- **TypeORM**: ORM utilizado de forma eficiente para a conexão com o banco de dados

## ⚙️ Execução do back-end
```bash
# Cloning the repository and accessing the directory
git clone git@github.com:MatheusBonadio/post-wall-assessment.git && cd server

# Instalação das dependências
yarn install

# Geração das migrações de banco de dados
yarn migrate:generate

# Execução das migrações do banco de dados
yarn migrate:run

# Executando o projeto
yarn dev
```
##### Renomeie o arquivo `.env.example` para `.env` e preencha com os dados pertinentes.

## 🖌️ Execução do front-end
```bash
# Cloning the repository and accessing the directory
cd client

# Instalação das dependências
yarn install

# Executando o projeto
yarn dev
```
##### Renomeie o arquivo `.env.example` para `.env` e preencha com os dados pertinentes.

## 📄 License

MIT © Matheus Bonadio
