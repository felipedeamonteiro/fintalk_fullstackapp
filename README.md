Stopped on 4:21:41 => Manage Members Modal

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