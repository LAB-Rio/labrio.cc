require 'sinatra'



get '/' do
  send_file 'public/index.html' 
end


get '/votacao' do
  redirect 'http://vote.desafioagorario.com.br'
end
