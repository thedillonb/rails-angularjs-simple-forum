desc 'This task is called by the Heroku cron addon'
task :call_page => :environment do
  uri = URI.parse('http://obscure-bayou-5295.herokuapp.com')
  Net::HTTP.get(uri)
end