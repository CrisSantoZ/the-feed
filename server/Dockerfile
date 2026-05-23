FROM node:18-alpine

# Instala dependências necessárias para compilar o bcrypt
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copia o package.json da pasta server
COPY server/package*.json ./

RUN npm install

# Copia todo o código da pasta server
COPY server/ ./

EXPOSE 3000

CMD ["npm", "start"]