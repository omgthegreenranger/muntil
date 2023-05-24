FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install -g nodemon
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 5000
USER node
CMD ["npm", "run", "start"]
