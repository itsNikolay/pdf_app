#!/bin/sh
set -e

bundle --deployment --path /bundle --without development test
bundle exec rake assets:precompile db:migrate --trace

exec "$@"
