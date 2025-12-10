FROM node:22

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package*.json ./
RUN pnpm install

COPY . .

RUN pnpm add prisma && DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" pnpm prisma generate

CMD ["pnpm", "run", "dev"]