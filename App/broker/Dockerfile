FROM node:12-alpine

WORKDIR /usr/app
COPY package.json .
RUN npm install 
COPY . .

EXPOSE 3001 3002 3003 8092 8094 8125 10000 9092 8888

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start