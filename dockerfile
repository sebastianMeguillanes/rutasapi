FROM node:18-alpine3.19

# Create app directory
WORKDIR /app/

COPY package.json package-lock.json ./

RUN npm install

RUN npm install pm2 -g

COPY . .
CMD ["pm2-runtime", "app.js"]