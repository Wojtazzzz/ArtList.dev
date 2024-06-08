FROM node:22.2-alpine3.19

WORKDIR /artlist

COPY package.json .
COPY prisma .
COPY .env .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["pnpm", "run", "dev:docker"]