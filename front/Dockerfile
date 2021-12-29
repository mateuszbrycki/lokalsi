# pull official base image
FROM node:17.3.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV production

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --only=production

# add app
COPY .. ./

# start app
CMD ["npm", "start"]