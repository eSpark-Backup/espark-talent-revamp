# Stage 1: Build stage
FROM node:lts-alpine as build
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent

COPY . .
RUN npm run build

# Stage 2: Production stage
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/package.json .
COPY --from=build /usr/src/app/package-lock.json .
RUN npm install --production --silent
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]