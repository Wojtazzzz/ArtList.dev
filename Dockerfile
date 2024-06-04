FROM node:22.2-alpine3.19

WORKDIR /artlist

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "dev"]