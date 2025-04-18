FROM node:20

# Crear directorio de trabajo
WORKDIR /src

COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar los archivos del proyecto
COPY . .

# Construir la aplicación Next.js para producción
RUN npm run build

# Exponer el puerto que Next.js usará
EXPOSE 3000

# Comando para ejecutar la aplicación en producción
CMD ["npm", "start"]
