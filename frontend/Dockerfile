FROM node:22

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package*.json ./
RUN pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]