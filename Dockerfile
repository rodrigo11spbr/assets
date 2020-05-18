FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

# npm CI helps you install faster, more reliable production dependencies
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]