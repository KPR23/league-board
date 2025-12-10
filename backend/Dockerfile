FROM node:22

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY . .

RUN pnpm install --ignore-scripts=false

RUN DATABASE_URL="" pnpm prisma generate

RUN pnpm build

CMD ["node", "dist/index.js"]