# CWRC-GitWriter

FROM node:14.5.0

WORKDIR /apps/CWRC-GitWriter

RUN npm install pm2 -g

COPY . .

RUN npm install && \
    npm run build

CMD ["pm2", "start", "./server/server.js", "--no-daemon"]

EXPOSE 3000
