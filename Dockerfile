FROM node:14
WORKDIR /node-web-app
RUN git config --global --add safe.directory /node-web-app
ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]
