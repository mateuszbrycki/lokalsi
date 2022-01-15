# pull official base image
FROM node:17.3.0-alpine as build-step

# set working directory
WORKDIR /app

ENV NODE_ENV production

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --only=production
RUN npm install react-scripts@5.0.0 -g --silent

# add app
COPY . ./

RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html