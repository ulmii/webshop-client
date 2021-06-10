FROM node

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /app
RUN npm install --silent

# add app
COPY . /app

# start app
CMD ["react-scripts", "start"]
