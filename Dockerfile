FROM node:10.13-alpine
LABEL author="Keane Le"
LABEL description="Container for testing Canary deployments"
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 80
CMD node index.js