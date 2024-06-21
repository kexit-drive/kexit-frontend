FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

#CMD PORT=5173 npm run preview
CMD npm run dev -- --host --port 3333
