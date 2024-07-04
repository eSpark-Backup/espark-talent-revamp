# Stage 1: Build stage
FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm pkg delete scripts.prepare && npm install --silent
COPY . .
RUN npm run build

# Stage 2: Production image
FROM node:lts-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/ ./
RUN npm pkg delete scripts.prepare && npm install --silent --production
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]