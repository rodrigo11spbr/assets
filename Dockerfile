FROM node:alpine

WORKDIR /usr/app

COPY package.json ./

COPY ["./src", ./]
COPY ["./package-lock.json", ./]

RUN npm ci

EXPOSE 8080

CMD ["npm", "start"]