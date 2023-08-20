# Estágio 1: Construir a aplicação ReactJS
FROM node:16 AS build
WORKDIR /app

# Copiar o arquivo package.json e instalar as dependências
COPY package.json .
RUN npm install

# Copiar todos os arquivos da aplicação
COPY . .

# Compilar a aplicação
RUN npm run build

RUN npm install -g serve 

# Estágio 2: Preparar o servidor web para servir os arquivos de build
#FROM nginx:alpine
#COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80
#EXPOSE 80
EXPOSE 3000

# Comando para iniciar o servidor nginx
CMD ["serve", "-s", "build"]
