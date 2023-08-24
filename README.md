# MyContacts_APP
O repositório MyContacts é um projeto destinado ao gerenciamento de contatos centralizado. Com uma interface amigável e intuitiva, este projeto oferece uma solução prática para a organização de informtatos ao permitir que os usuários adicionem, visualizem, atualizem e removam contatos em um banco de dadoações de contato importantes.

## Funcionalidades

O MyContacts oferece as seguintes funcionalidades principais:

1. **Listagem de Contatos**: Os usuários podem visualizar uma lista de todos os contatos registrados.

2. **Detalhes do Contato**: Ao clicar em um contato específico, os usuários podem visualizar detalhes como nome, número de telefone e endereço.

3. **Adição de Novos Contatos**: Os usuários podem adicionar novos contatos fornecendo informações como nome, número de telefone e endereço.

4. **Edição de Contatos**: Os usuários podem editar as informações de um contato existente.

5. **Exclusão de Contatos**: Os usuários têm a opção de excluir contatos da lista.

## Tecnologias Utilizadas

- **Frontend**: O frontend é desenvolvido utilizando React.js 17, atualmente sendo atualizado para React.js 18 e foi inicializado com o `create-react-app` para configurar a estrutura básica do projeto.

- **Backend**: O backend é construído em cima do Express.js, que fornece uma estrutura para criar a API RESTful necessária para as operações de CRUD.

- **API RESTfull**: A API RESTful é responsável por gerenciar as operações de CRUD para os contatos. Ela utiliza rotas e controladores para manipular as requisições HTTP.

- **Banco de Dados**: O projeto utiliza o PostgreSQL como banco de dados para armazenar as informações dos contatos. O banco de dados é executado dentro de um contêiner Docker para facilitar a implantação e o gerenciamento.

- **Docker**: O PostgreSQL é executado em um contêiner Docker, permitindo que o ambiente de desenvolvimento seja facilmente replicado em diferentes máquinas.

## Arquitetura

A arquitetura do projeto segue um padrão de três camadas:

1. **Camada de Apresentação (Frontend)**: Desenvolvida com React.js, esta camada é responsável por exibir a interface do usuário e interagir com o backend através das APIs.

2. **Camada de Lógica de Negócios (Backend)**: Construída com Express.js, esta camada gerencia as regras de negócios e expõe endpoints da API RESTful para operações CRUD.

3. **Camada de Armazenamento (Banco de Dados)**: Utiliza o PostgreSQL para armazenar e recuperar as informações dos contatos.

## Configuração e Execução

1. Clone o repositório do projeto: `git clone <URL do Repositório>`
2. Instale as dependências do frontend: `cd fe && npm install`
3. Instale as dependências do backend: `cd api && npm install`
4. Inicie o frontend: `cd frontend && npm start`
5. Inicie o backend: `cd backend && npm dev`
6. Configure e inicie o contêiner Docker com o PostgreSQL: `docker run --name pg -e POSTGRES_DATABASE=root POSTGRES_PASSWORD=root -p 5432:5432 -d postgres`

Certifique-se de configurar corretamente as variáveis de ambiente e conexões necessárias para que o projeto funcione corretamente.

## Capturas de Tela

Aqui estão algumas capturas de tela do projeto:

![Tela de Listagem de Contatos](screenshots/listagem.png)
*Figura 1: Tela de Listagem de Contatos*

![Tela de Detalhes do Contato](screenshots/detalhes.png)
*Figura 2: Tela de Detalhes do Contato*

## Conclusão

O MyContacts é um projeto de gerenciamento de contatos que utiliza tecnologias modernas como React.js, Express.js, PostgreSQL e Docker para fornecer uma experiência de usuário eficiente e escalável. Com sua arquitetura de três camadas e funcionalidades CRUD, o MyContacts é uma solução completa para o gerenciamento de contatos pessoais.
