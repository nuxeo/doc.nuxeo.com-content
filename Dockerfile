FROM node:erbium
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
# Bundle app source
COPY . /usr/src/app
EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]
