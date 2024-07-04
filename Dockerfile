FROM node:lts-alpine
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm pkg delete scripts.prepare && npm install --production --silent
ENV NODE_ENV=production
ENV HUSKY=0
WORKDIR /usr/src/app
COPY . .
RUN npm run build
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]