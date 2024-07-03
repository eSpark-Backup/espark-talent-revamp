FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
RUN apk add --no-cache git
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "husky", "./","prepare.js"]
RUN HUSKY=0 npm ci --only=production --silent
COPY . .
RUN npm run build
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
