FROM node:13-alpine
WORKDIR /app
COPY package.json .
RUN npm install\
    && npm install typescript -g
COPY . .
EXPOSE 8081
CMD [ "npm", "start" ]
