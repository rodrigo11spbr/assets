FROM node:alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm ci

COPY ["./src", .]
COPY ["./package-lock.json", .]

EXPOSE 8080

CMD ["npm", "start"]