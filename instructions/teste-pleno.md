<!-- [![](./images/logoazul.png)](https://www.andrasistemas.com.br) -->
<h1 align="center">
  <a href="https://www.andrasistemas.com.br">
    <img alt="Logo moveit" src="./images/logoazul.png" width="400px" />
  </a>
</h1>

<p align="center">
 <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#docapi">Documentação da API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#instrucoes">Instruções</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#tecnologia">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#prazo">Prazo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#bonus">Bônus</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#avaliacao">Avaliação</a>
</p>

<a id="projeto"></a><br>

# Teste para candidatos à vaga de Desenvolvedor NextJS Pleno

Olá caro desenvolvedor, nesse teste analisaremos seu conhecimento geral. 

Abaixo explicaremos tudo o que será necessário.

<a id="docapi"></a><br>

## Documentação da API

Todas as informações necessárias para acessar a API estão no arquivo **[API-privada-OpenAPI.yaml](./api/API-privada-OpenAPI.yaml)** localizado na pasta **api** deste projeto.

<a id="instrucoes"></a><br>

## Instruções

A proposta consiste em implementar uma aplicação web utilizando o framework NextJS que terá como finalidade desenvolver um CRUD (Create, Read, Update, Delete) para naturezas da operação.

Sua aplicação deverá possuir:

- CRUD de naturezas da operação:
  - Criar, alterar, excluir e pesquisar naturezas da operação.
  - Implementar validações de campos obrigatórios e tipos de dados conforme documentação da API.
- Grade de pesquisa:
  - Deve ser ordenável por qualquer coluna, e possuir paginação de 20 itens.

<a id="funcionalidades"></a><br>

## Funcionalidades

Deverá ter uma tela inicial com um formulário de login que aceita E-Mail e Senha, ao clicar no botão ENTRAR, o usuário acessa a aplicação.

Como não haverá cadastro de usuários, para autenticação utilizar E-Mail e Senha conforme abaixo:

- E-Mail: **testevagas@andrasistemas.com.br**
- Senha: **frontendpleno**

![Tela de Login](./layout/teladelogin.png)

Após feito o login, o usuário deverá ser direcionado para a tela de pesquisa, onde deverá ser possível realizar a inclusão, a pesquisa e a saída do sistema. 

Ao sair do sistema o usuário deverá ser direcinado para a tela de login.

![Tela de Pesquisa](./layout/teladepesquisa.png)

Ao clicar no botão para incluir o usuário deverá ser direcionado para a tela de manutenção com os campos em branco para que sejam preenchidos.

![Tela de Manutenção](./layout/telademanutencao.png)

Na tela de manutenção ao clicar no botão Confirmar o registro deve ser incluído, emitindo uma mensagem de sucesso, e se clicar no botão Cancelar deve ser emitida uma mensagem se o usuário relamente deseja abandonar a operação. 

Confirmando ou abandonando a operação o usuário deverá ser redirecionado para a tela de pesquisa.

Na tela de pesquisa tem o campo de pesquisa que digitando a descrição da natureza da operação e após clicar na lupa deverá ser realizado um filtro, trazendo os registros da API que serão apresentados na grade e em cada registro haverão 2 botões para excluir e alterar.

Ao clicar no botão para excluir deverá emitir uma mensagem solicitando a confirmação da exclusão. 

Ao clicar no botão para alterar deverá ser direcionado para a tela de manutenção com os campos da grade permitindo a alteração dos mesmos.

<a id="tecnologia"></a><br>

## Tecnologias

Devem ser utilizadas as seguintes tecnologias:

- HTML 5
- CSS 3
- Javascript
- NextJS
- ReactJS
- Material UI
- JSON Web Token
- SweetAlert2

<a id="prazo"></a><br>

## Prazo

Tempo para desenvolver a solução e nos enviar a partir da data da liberação desta proposta.

- Para vaga de Júnior: 7 dias.
- Para vaga de Pleno: 5 dias.
- Para vaga de Sênior: 3 dias.

<a id="entrega"></a><br>

## Entrega

- Crie o projeto no seu repositório privado ou público preferido (GitHub, GitLab)
- Ao finalizar adicione no README.md as informações necessárias para executar o seu projeto (comandos, etc)
- Compacte-o e envie o ZIP no e-mail danny@andrasistemas.com.br 
- Anexe também neste e-mail seu currículo

<a id="bonus"></a><br>

## Bônus

- Permitir exclusão de registros em massa por lote.
- Permitir que o usuário mude o número de itens por página.
- Testes unitários.
- Dark Mode.
- Qualquer funcionalidade extra é bem vinda para agregar na solução básica proposta.

<a id="avaliacao"></a><br>

## Avaliação

Entre os critérios de avaliação estão:

- Organização do código
- Separação de módulos e componentes
- Legibilidade
- Comentários
- Velocidade de desenvolvimento
- Documentação do projeto (README.md)
- Performance
- Caso não tenha concluído o desafio, envie mesmo assim, queremos saber até onde você chegou

### Boa sorte!
