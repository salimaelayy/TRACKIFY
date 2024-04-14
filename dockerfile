FROM node:20-alpine

WORKDIR /TRACKIFY

COPY package*.json .

RUN npm install

COPY . . 

RUN npm run dev:front

EXPOSE 5137

CMD ["npm", "run", "dev:front"]

