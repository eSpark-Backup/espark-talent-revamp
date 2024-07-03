FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["prepare.js", "package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# Install all dependencies, including devDependencies
RUN npm install --only=production --silent
COPY . .
RUN npm run build
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
