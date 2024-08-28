FROM node:20
WORKDIR /home/sysadmin/my-rest-api/rest-api-nodejs
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4020
CMD ["npm","start"]