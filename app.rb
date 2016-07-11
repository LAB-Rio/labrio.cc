require 'sinatra'

enable :static

get '/' do
  send_file 'public/index.html' 
end


get '/votacao' do
  redirect 'http://vote.desafioagorario.com.br'
end

get '/imersao' do
 send_file 'public/imersao.html'
end

get '/chegajunto' do
 send_file 'public/chegajunto.html'
end

get '/desafioagora' do
 send_file 'public/desafioagora.html'
end

get '/agora' do
 send_file 'public/desafioagora.html'
end

get '/conselhodajuventude' do
 send_file 'public/conselho.html'
end

get '/conselho' do
 send_file 'public/conselho.html'
end

get '/mapeando' do
 send_file 'public/mapeando-new.html'
end
