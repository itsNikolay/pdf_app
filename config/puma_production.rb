workers 1

threads 1, 6

app_dir = File.expand_path('../..', __FILE__)

rails_env = ENV['RAILS_ENV'] || 'production'
environment rails_env

#bind "unix:///sockets/#{ENV['SOCKET_NAME']}"
#bind 'tcp://0.0.0.0:9292'
#bind 'ssl://0.0.0.0:8080'
#ssl_bind '0.0.0.0', '9292', {
#  key:  "#{app_dir}/config/certs/puma/server.key",
#  cert: "#{app_dir}/config/certs/puma/server.crt"
#}
bind "ssl://0.0.0.0:9292\
?key=#{app_dir}/config/certs/server.key\
&cert=#{app_dir}/config/certs/server.crt"

#stdout_redirect "#{app_dir}/log/puma.stdout.log", "#{app_dir}/log/puma.stderr.log", true

pidfile "#{app_dir}/tmp/pids/puma.pid"
state_path "#{app_dir}/tmp/pids/puma.state"
activate_control_app

on_worker_boot do
  require "active_record"
  ActiveRecord::Base.connection.disconnect! rescue ActiveRecord::ConnectionNotEstablished
  ActiveRecord::Base.establish_connection(YAML.load_file("#{app_dir}/config/database.yml")[rails_env])
end
