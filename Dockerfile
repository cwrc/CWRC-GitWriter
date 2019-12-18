# CWRC-GitWriter

FROM node

RUN npm install -g less
RUN npm install http-server -g

# RUN apt-get update && \
#     apt-get upgrade -y && \
#     apt-get install -y git

WORKDIR /apps/CWRC-GitWriter

COPY . .

RUN npm install
RUN npm run build

WORKDIR /apps/CWRC-GitWriter/build

EXPOSE 3000
CMD ["http-server", "-p", "3000"]