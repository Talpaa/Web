# Usa un'immagine di base con Node.js
FROM node:23.3.0 AS build

# Imposta la directory di lavoro nel container
WORKDIR /app

# Copia i file package.json e package-lock.json nel container
COPY package.json package-lock.json ./

# Installa le dipendenze
RUN npm install

# Copia tutto il resto dei file del progetto
COPY . .

# Esegui il build della tua app React
RUN nvm use node

# Esegui il build della tua app React
RUN npm run build

# Usa un'immagine Nginx per servire la tua app
FROM nginx:alpine

# Copia i file di build dal primo container
COPY --from=build /app/build /usr/share/nginx/html

# Espone la porta 80 per accedere alla tua app
EXPOSE 80

# Comando per avviare il server Nginx
CMD ["nginx", "-g", "daemon off;"]
