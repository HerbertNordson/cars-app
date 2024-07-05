# Cartálogo APP

Bem-vindo ao cartálogo. Uma aplicação web focada em apresentar as melhores opções de carros à venda com os melhores preços do mercado.

## O que é?

É uma aplicação web desenvolvida com o framework ReactJS. Para sua criação foram utilizadas algumas ferramentas de tecnologia. Sendo elas:

    ReactJS - Para construção da aplicação SPA.
    
    Tailwind CSS - Estilizador CSS que traz mais dinâmica na elaboração dos layout's.
    
    Context API - Pensando em escalabilidade do projeto, utilizar o contextAPI como gerenciador de estado global traz mais flexibilidade para 
      o gerenciamento da nossa aplicação, permitindo uma melhor distribuição dos nossos dados e podendo compartilhar ações de forma mais dinâmica.
      
    LocalStorage - Optei pelo localStorage como um "banco de dados" simples para persistência de dados. Por ser nativo do navegador e simples utilização
      é uma opção que não custa desempenho da nossa aplicação.
      
    MVC - A estrutura escolhida para a construção do nosso projeto foi a MVC, pois tem uma estrutura mais simplificada e objetiva. Sendo suficiente para a aplicação
      e totalmente escalável.

## Como acessar?

É possível acessar a aplicação de duas formas:

### Rodando a aplicação em Local

Para acessar localmente é necessário clonar o repositório em sua máquina da seguinte maneira: 
  Insira o seguinte comando em seu terminal ``` git clone https://github.com/HerbertNordson/cars-app.git ```;
  Ao concluir o upload dos arquivos acesse pasta do arquivo pelo seu terminal com ``` cd cars-app ```;
  Após acessar a pasta é necessário baixar as dependências do projeto. Para esta ação você tem duas escolhas, basta digitar o comando de sua preferência no terminal ``` npm install ``` ou ``` yarn install ```;
  Dependências instaladas, agora é só executar o projeto com o seguinte comando de sua preferência: ``` npm start ``` ou ``` yarn start ```;
