FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5005
ENV HOST=0.0.0.0

EXPOSE 5005

CMD [ "npm", "start" ]