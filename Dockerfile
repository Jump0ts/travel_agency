FROM node:20

# Crear directorio de trabajo
WORKDIR /app

# Instalar PM2 globalmente
RUN npm install -g pm2

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm install --frozen-lockfile

# Copiar el resto del código, incluyendo ecosystem.config.js
COPY . .

# Build del proyecto
RUN npm run build

# Exponer puerto de la app
EXPOSE 3001

# Comando para iniciar con PM2
CMD ["pm2-runtime", "ecosystem.config.js", "--only", "redestinea-staging"]
