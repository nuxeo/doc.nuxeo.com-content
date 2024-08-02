FROM node:14
WORKDIR /node-web-app
ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]
