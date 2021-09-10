FROM node:14-slim

WORKDIR /opt/src/central-de-avisos/app

COPY package.json /opt/src/central-de-avisos/app/

RUN npm install

COPY . /opt/src/central-de-avisos/app/

CMD ["npm", "start"]