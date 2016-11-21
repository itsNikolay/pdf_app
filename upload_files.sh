#!/bin/sh

USER="root"
HOST="file-converter.online"
SERVER="$USER@$HOST"
ssh $SERVER "mkdir -p /root/nginx/conf.d /root/rails/"
rsync docker-compose-production.yml $SERVER:/root/docker-compose.yml
rsync .env $SERVER:/root/.env
rsync docker-compose-letsencrypt.yml $SERVER:/root/docker-compose-letsencrypt.yml
rsync nginx_myapp.conf $SERVER:/root/nginx/conf.d/nginx_myapp.conf
rsync rails-entrypoint.sh $SERVER:/root/rails/rails-entrypoint.sh
rsync release.sh $SERVER:/root/release.sh
