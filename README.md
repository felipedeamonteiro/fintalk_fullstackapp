# Fintalk Frontend developer test
Primeiro temos o case proposto pela empresa e logo abaixo temos instruções de como o projeto foi feito, ferramentas utilizadas tanto no front quanto no back e o link para a aplicação.

## Desenvolvimento de um Chat em Tempo Real

### Descrição do Desafio

Seu novo desafio é desenvolver um aplicativo de chat em tempo real focando no front-end. Este aplicativo deve fornecer uma experiência dinâmica, moderna e interativa, permitindo aos usuários se registrar, acessar diferentes salas de chat e comunicar-se com outros usuários através de mensagens em tempo real. O objetivo é criar uma interface que seja não apenas funcional, mas também agradável e intuitiva para o usuário.

## Tecnologias a Serem Utilizadas

**Front-end:** O desenvolvimento do aplicativo deve ser feito usando ReactJS. Espera-se que você mostre habilidades e bons conhecimentos nesta biblioteca, criando interfaces que sejam atraentes e eficazes do ponto de vista da usabilidade.

## Funcionalidades Esperadas

- **Cadastro e autenticação de usuários:** Implemente um sistema para permitir que os usuários criem uma conta e façam login no aplicativo.
- **Criação e gestão de salas de chat:** Os usuários devem poder criar salas de chat, assim como se juntar a salas já existentes. A gestão das salas pode incluir funcionalidades como dar nome à sala, definir uma descrição ou até restringir o acesso por meio de convites.
- **Envio e recebimento de mensagens em tempo real:** Apesar do foco no front-end, é importante simular a comunicação em tempo real. Você pode fazer isso usando mocks ou estados locais para simular a interação entre usuários em diferentes instâncias do aplicativo.

## Instruções de Entrega

1. **Criação do Repositório:** Crie um repositório no GitHub especificamente para este projeto. É crucial o uso de boas práticas de desenvolvimento, como commits claros e documentação adequada.
2. **Privacidade do Repositório:** O repositório deve ser mantido público para permitir que nossa equipe avalie seu código de maneira abrangente.
3. **Envio do Link:** Após concluir o projeto e fazer todos os commits necessários, envie o link do repositório para o e-mail [andressa.carvalho@fintalk.ai](mailto:andressa.carvalho@fintalk.ai) com o assunto "**Entrega de Teste Técnico Front-end - [Seu Nome]**". Você tem 10 dias corridos a partir do recebimento deste case para enviar seu projeto.
4. **Informações Adicionais:** No e-mail, sinta-se à vontade para incluir quaisquer comentários ou informações adicionais que desejar sobre o projeto. Destaque os desafios enfrentados, escolhas de design e quaisquer outros aspectos relevantes.

Este desafio representa uma oportunidade para você demonstrar suas habilidades técnicas e sua capacidade de pensar na experiência do usuário final. Procuramos candidatos que não apenas dominem a codificação, mas que também se concentrem em criar uma interface amigável e uma experiência de usuário satisfatória.

Estamos ansiosos para ver sua solução para este desafio. Por favor, siga todas as instruções de entrega cuidadosamente. 

Boa sorte!

==========================================================================================

# Instruções para rodar o projeto

## Link do projeto em produção

[Fintalk_Felipe_Frontend_test](https://fintalk-fullstackapp.vercel.app/)

## Frontend

### - Especificações e tecnologias utilizadas

Este projeto foi construído utilizando `React v18`, `Next.js v14.1.0` e com `Typescript`. Por conta do Next.js, não construí um backend em pasta separada. Assim que instalar as dependências, tudo será instalado tanto para o front quanto para o back.

Aqui, a versão do `node` é `v20.10.0` e o gerenciador de pacotes é o `npm` na versão `10.2.3`. Para rodar o projeto eles precisam ser baixados. Eu recomendo instalar o Node via [NVM](https://github.com/nvm-sh/nvm). Todas as instruções estão nos links para instalá-los.

### - Como rodar o projeto

Depois de baixar o código do repositório, vá para a raiz do projeto e rode `npm i` ou `npm install` para instalar todas as dependências.

Depois é só rodar:

```
npm run dev
```

Para autenticar um usuário e para ganhar tempo, utilizei [Clerk](https://clerk.com/) para tal tarefa. É necessário criar uma conta lá e utilizar algumas senhas/chaves secretas para estabelecer conexão. As variáveis de ambiente estão no arquivo `example.env`. O mesmo se aplica para [Uploadthing](https://uploadthing.com/) que é um serviço de envio e recebimento de arquivos de imagem e o [Livekit](https://livekit.io/) para fazer as chamadas de audio e vídeo.

## Backend

### - Especificações e tecnologias utilizadas

Este projeto foi construído usando `Nodejs` com `Typescript`.

Aqui, a versão do `node` é `v20.10.0` e o gerenciador de pacotes é o `npm` na versão `10.2.3`.

O Banco de dados usado é `Postgres` com `Prisma` como ORM (object-relational mapping). Além disso, o banco de dados utilizado em desenvolvimento estava rodando em `docker` com uma imagem do postgres. Em produção 

### - Como rodar o projeto

#### Docker

Sugiro escolher entre usar somente o `docker` ou o `docker compose`. Ambos possui uma documentação vasta, mas eu utilizei em desenvolvimento o `docker compose`. Baixei uma imagem do `Postgres`, alterei o arquivo `schema.prisma` dentro da pasta `pisma` e rodei os seguintes comandos:

1 - subir o container do docker compose:
```
docker compose up -d
```
2 - ligar o servidor do banco de dados:
```
npx prisma db push  
```
3 - Rodar o prisma studio pra ver o banco de dados:
```
npx prisma studio
```
## Obs
1 - Foi criado uma pasta "pages" por causa da biblioteca socket.io que está tendo problemas desde o next.13 com a pasta "app", então a pasta foi criada para evitar problemas

2 - Para fazer o deploy da aplicação foi necessário adicionar "secrets" relacionados a algumas variáveis da "Clerk" (lib de autenticação) no repositório.