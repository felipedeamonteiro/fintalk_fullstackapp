### Instruções para contribuir enquanto fazia o projeto

Para rodar o banco de dados rodar:
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
========================================

Quando mudar alguma coisa no arquivo schema.prisma, deve rodar:
```
npx prisma generate
```
E depois
```
npx prisma db push
```

========================================

Para resetar o banco de dados:

```
npx prisma migrate reset
```
Depois
```
npx prisma generate
```
E depois
```
npx prisma db push
```

# Importante
1 - Foi criado uma pasta "pages" por causa da biblioteca socket.io que está tendo problemas desde o next.13 com a pasta "app", então a pasta foi criada para evitar problemas

2 - Para fazer o deploy da aplicação foi necessário adicionar "secrets" relacionados a algumas variáveis da "Clerk" (lib de autenticação) no repositório.
