FROM node:lts-alpine
ENV NODE_ENV=production
ENV HUSKY=0
WORKDIR /usr/src/app
COPY ["../.husky!(**)","install.mjs", "package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# Install all dependencies, including devDependencies
RUN npm install --silent
COPY . .
RUN npm run build
RUN npm prune --production
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
