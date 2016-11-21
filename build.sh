#!/bin/sh

USER="itsnikolay"
PASS="longtimeago"
DOMAIN="reg.file-converter.online:5000"
APP_NAME="$DOMAIN/pdf_app"

docker build -t $APP_NAME .
docker login -u $USER -p $PASS $DOMAIN
docker push $APP_NAME
