FROM node:16
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 80
ENV NODE_ENV=local
ENTRYPOINT [ "node", "server.js" ]
