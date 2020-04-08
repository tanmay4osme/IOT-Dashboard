FROM node:13-alpine

WORKDIR /usr/src/app

COPY package.json .
RUN apk add --no-cache make gcc g++ python zeromq zeromq-dev
RUN npm install

COPY . .

EXPOSE 5001 5000 

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start