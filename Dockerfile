FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
RUN apk add --no-cache git
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", ".husky", "./"]
RUN npm install --production && mv node_modules ../
RUN HUSKY=0 npm ci --only=production --ignore-scripts --silent
COPY . .
RUN npm run build
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
