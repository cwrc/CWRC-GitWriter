# CWRC-GitWriter

FROM node:14.17.1

WORKDIR /apps/CWRC-GitWriter

RUN npm install pm2 -g

COPY . .

RUN npm install && \
    npm run build

CMD ["pm2-runtime", "ecosystem.config.js"]

EXPOSE 3000
