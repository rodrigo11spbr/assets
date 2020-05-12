FROM node:alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm ci

COPY ["./src", .]

EXPOSE 8080

CMD ["npm", "start"]