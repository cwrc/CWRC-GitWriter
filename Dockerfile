# CWRC-GitWriter

FROM node

RUN npm install -g less
RUN npm install http-server -g

WORKDIR /apps/CWRC-GitWriter

COPY . .

RUN npm install && npm run build

WORKDIR /apps/CWRC-GitWriter/build

EXPOSE 3000
CMD ["http-server", "-p", "3000"]