get '/' do
  @articles = Article.all.limit(3)
  erb :index
end

post '/' do
  @email = Address.find_or_create_by_email(params[:address])
  redirect '/'
end

get '/articles/:article_id' do
  @article = Article.find(params[:article_id])
  erb :article
end

