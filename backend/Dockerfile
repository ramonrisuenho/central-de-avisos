FROM node:current-bullseye-slim

WORKDIR /opt/src/central-de-avisos/app/

COPY package.json /opt/src/central-de-avisos/app/

COPY . /opt/src/central-de-avisos/app/

EXPOSE 5000

ENTRYPOINT [ ".docker/entrypoint.sh" ]