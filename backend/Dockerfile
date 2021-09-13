FROM node:current-bullseye-slim

WORKDIR /opt/src/central-de-avisos/app/

COPY package.json /opt/src/central-de-avisos/app/

COPY . /opt/src/central-de-avisos/app/

ENTRYPOINT [ ".docker/entrypoint.sh" ]