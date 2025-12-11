FROM node:22-alpine AS base

WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

FROM base AS dependencies
RUN pnpm install --frozen-lockfile

FROM base AS build
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm prisma generate
RUN pnpm build
RUN pnpm prune --prod

FROM base AS deploy
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/prisma ./prisma

ENV NODE_ENV=production
CMD ["node", "dist/index.js"]