FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Serve build using a lightweight web server
npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
