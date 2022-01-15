# pull official base image
FROM node:17.3.0-alpine as build-step

ARG build_time
ENV BUILD_TIME=$build_time

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
RUN sed -i "s/BUILD_TIME/${BUILD_TIME}/g" /usr/share/nginx/html/sitemap.xml