# Rodando o projeto
## Pré-requisitos
- instalar dotnet cli ou visual studio community
- instalar npm v16
- não precisa subir o banco, estou usando um banco online

## Rodando para desenvolvimento
### Backend usando dotnet cli
1. cd CleanArchMVC.API
2. dotnet restore
3. dotnet build
4. dotnet run

### Backend usando visual studio community
- abrir solução usando o arquivo ./CleanArchMvc.sln

### Frontend
1. cd CleanArchMVC.Frontend/vehicle-catalog
2. npm install
3. npm start


## Se quiser rodar as migrations
- dotnet tool install --global dotnet-ef
- dotnet ef database update --project CleanArchMvc.Infra.Data -s CleanArchMvc.API -c ApplicationDbContext --verbose

## Usuário com cargo de admin para fins de teste: 

username: admin@example.com
password: Admin4321.

## Para testar a API no Swagger 
1. cd CleanArchMVC.API
2. dotnet run
3. ir para "http://localhost:5143/swagger/index.html" 