FROM node:20-alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY ui/package.json ui/package-lock.json ./ui/

RUN npm install --prefix ui

COPY . .

RUN npm run build --prefix ui

VOLUME [ "/app","/app/node_modules", "/app/ui/node_modules" ]

EXPOSE 8000

CMD [ "npm","start" ]
