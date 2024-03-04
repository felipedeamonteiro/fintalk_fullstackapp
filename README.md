Stopped on 5:13:53 => Create Channel Modal

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