#! /bin/bash

if [ -n "$1" ] && [ "debug" != "$1" ]
then
    echo "Invalid argument. Only 'debug' is allowed."
    exit 1
fi

APP_PATH="$(pwd)"

docker build -t frontend-check/node-web-app .

docker run --rm -v $APP_PATH/src:/usr/src/app/src -p 3000:3000 -ti frontend-check/node-web-app $1
