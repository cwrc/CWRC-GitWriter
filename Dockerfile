# CWRC-GitWriter

FROM node:14.15.1

WORKDIR /apps/CWRC-GitWriter

RUN npm install pm2 -g

COPY . .

RUN npm install && \
    npm run build

# CMD ["pm2", "start", "./server/server.js", "--no-daemon"]
CMD ["pm2-runtime", "ecosystem.config.js"]

EXPOSE 3000
