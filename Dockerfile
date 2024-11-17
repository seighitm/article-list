FROM node:16

WORKDIR /app

COPY package.json ./

RUN npm cache clean --force

RUN npm install --legacy-peer-deps

COPY . .

RUN npm install -g ember-cli

RUN ember build --environment=production

EXPOSE 4200

CMD ["npm", "start"]
