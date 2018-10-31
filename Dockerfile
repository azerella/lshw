FROM node:8.12.0

WORKDIR /usr/src/lshw

COPY . /usr/src/lshw

CMD [ "node", "src/index.js"]