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

### Acessando através do link

 Para acessar a aplicação está hospedada na Vercel, então você pode acessa-la a qualquer momento através do link: https://cartalogo-nu.vercel.app/

# Components

## Card.js

![image](https://github.com/HerbertNordson/cars-app/assets/69546112/8e37b7e3-b28b-4afe-b184-6e19752bd919)

O componente card tem como responsabilidade ser o modelo de apresentação dos carros em nosso catálogo de produtos. Por ter um papel importante em nossa aplicação, o próposito pelo qual o componente Card foi criado, é para que sua utilização seja simples e torne viável a reutilização do componente em outras partes do projeto.

Atualemente, este é o nosso componenete Card.js:

![image](https://github.com/HerbertNordson/cars-app/assets/69546112/a6430b60-8cfc-4a21-82b7-28d25309ab3f)

Na estrutura atual, para a utilização dele é necessário passar como parâmetro o objeto ``` cars ```, que possui em seu contrato as seguintes propriedades:
        {
           id: number,
           timestamp_cadastro: number,
           modelo_id: number,
           ano: number,
           combustivel: string,
           num_portas: number,
           cor: string,
           nome_modelo: string,
           valor: number,
           brand: number,
        }

### Como utilizar

A utilização do componente é muito simples, por ser bastante versátil ele pode ser utilizado em algumas situações, para inseri-lo ao seu layout, basta importar o ```Card.js``` e utilizar o componente ```<Card cars={obj} />```.

![image](https://github.com/HerbertNordson/cars-app/assets/69546112/e95475cf-7822-4358-a356-8a53fbc34519)

Neste exemplo estamos utilizando o nosso componente em um métdo MAP e de acordo com que o nosso array ``` cars ``` está sendo mapeado, um novo elemento CARD está sendo criado e sendo passado por parâmetro o objeto ```cars``` montando o integrando o componente ao layout. No caso apresentado acima, caso o nosso array ``` cars ``` esteja vázio retornamos a mensagem de ``` Nenhum carro deste foi encontrado! ```` para o usuário. 

Estes são os resultados em ambos os casos:

Array com dados:
![image](https://github.com/HerbertNordson/cars-app/assets/69546112/36692311-a345-4eff-93cd-b653c10c7f42)

Array vázio: 
![image](https://github.com/HerbertNordson/cars-app/assets/69546112/d7d44d26-b5cb-4d65-b170-ddd20d2a00f6)

## Conclusão 

Essa é uma aplicação criada para análise técnica e toda a sua construção é para este mesmo fim. Foi um processo de muita aprendizagem e de grande valor para por em prática os meus conhecimentos.
É possível que a aplicação sofra alterações de aprimoramento e/ou ao longo do tempo tenha sua hospedagem suspensa.
