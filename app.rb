require 'sinatra'



get '/' do
  redirect '/index.html' 
end


get '/votacao' do
  redirect 'http://vote.desafioagorario.com.br'
end
