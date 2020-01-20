# CWRC-GitWriter

FROM node

WORKDIR /apps/CWRC-GitWriter

RUN npm install pm2 -g

COPY . .

RUN npm install && \
    npm run build

CMD ["pm2", "start", "server.js", "--no-daemon"]

EXPOSE 3000