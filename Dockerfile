FROM node:lts-alpine
COPY package.json package-lock.json* npm-shrinkwrap.json* ./
COPY install.mjs .
COPY ../.husky/ .husky/
RUN npm install --silent
ENV NODE_ENV=production
ENV HUSKY=0
WORKDIR /usr/src/app
COPY . .
RUN npm run build
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
