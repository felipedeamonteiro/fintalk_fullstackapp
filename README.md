Stopped on 2:20:47

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