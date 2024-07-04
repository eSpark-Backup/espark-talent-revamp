FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm pkg delete scripts.prepare && npm install --silent
COPY . .
ENV NODE_ENV=production
ENV HUSKY=0
RUN npm run build
# Stage 2: Create the production image without devDependencies
FROM node:lts-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/ ./
RUN npm install --silent --production
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]