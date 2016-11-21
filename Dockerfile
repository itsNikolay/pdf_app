FROM itsnikolay/rails-alpine

ENV APP_HOME /rails_app
ENV RAILS_ENV production

ADD . $APP_HOME
WORKDIR $APP_HOME
RUN rm -rf .git
