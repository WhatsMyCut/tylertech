FROM node:12-alpine

WORKDIR /usr/src/app
RUN npm install -g yarn
COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn build
EXPOSE 3000
ENV HOST=0.0.0.0

CMD [ "yarn", "start" ]

