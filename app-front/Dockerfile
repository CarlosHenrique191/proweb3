FROM alpine
LABEL maintainer = "ferreira.h@aluno.edu.ifsp.br"
RUN apk add --update nodejs nodejs-npm
WORKDIR /src
COPY . /src
RUN npm install
EXPOSE 3000
ENV HOST 0.0.0.0
ENV NUXT_PORT=3000
CMD [ "npm", "run dev" ]
