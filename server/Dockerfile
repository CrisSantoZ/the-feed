FROM node:18-alpine

WORKDIR /app

# Copia o package.json da pasta server
COPY server/package*.json ./

RUN npm install

# Copia todo o código da pasta server
COPY server/ ./

EXPOSE 3000

CMD ["npm", "start"]