FROM node:22-slim

# Prisma treba openssl
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app/backend

COPY backend/ ./
COPY frontend/ /app/frontend/

RUN npm ci

ENV NODE_ENV=production
EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node src/app.js"]