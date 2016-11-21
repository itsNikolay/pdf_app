#!/bin/sh

VERSION=""
APP_NAME="pdf_app"
RELEASE_BRANCH="origin/master"
GIT_URL="git@github.com:itsNikolay/pdf_app.git"

git clone $GIT_URL $APP_NAME
cd $APP_NAME
git checkout $RELEASE_BRANCH
git pull $RELEASE_BRANCH
