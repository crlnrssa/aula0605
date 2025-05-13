FROM node:16-slim

WORKDIR /app

COPY ./ /app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
