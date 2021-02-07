FROM node:14.15.4

WORKDIR /usr/src/ebazaar

COPY ./ ./

RUN npm install
# RUN npm build

EXPOSE 5000

CMD ["npm","run","dev"]