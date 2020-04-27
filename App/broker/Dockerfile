FROM node:12-alpine

WORKDIR /usr/app
COPY package.json .
RUN npm install 
COPY . .

EXPOSE 3001 3002

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start