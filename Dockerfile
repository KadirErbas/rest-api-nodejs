FROM node:14
WORKDIR /home/sysadmin/my-rest-api/rest-api-nodejs-2/rest-api-nodejs
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4020
CMD ["npm","start"]
