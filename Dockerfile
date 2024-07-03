FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
RUN apk add --no-cache git
COPY ["prepare.js", "package.json", "package-lock.json*", "npm-shrinkwrap.json*", ".husky", "./"]
# Install all dependencies, including devDependencies
RUN npm install --only=production --silent --no-optional

# Install husky explicitly (assuming it's a devDependency)
RUN npm install husky --save-dev --silent
COPY . .
RUN npm run prepare
RUN npm run build
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
