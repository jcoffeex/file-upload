FROM node:20.18.0
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 5173