class StaticPagesController < ApplicationController
  
  #before_filter :authenticate_user!, except => [:main, :visit]

  def main
    @page = StaticPage.find_by(name: 'main')
    #@posts = @page.posts.paginate(page: params[:page])
    #@post = @page.posts.build if signed_in?

  end

   def about
    @page = StaticPage.find_by(name: 'about')

    #@post = @page.posts.build if signed_in?
  end

  def product
    @page = StaticPage.find_by(name: 'product')

    #@post = @page.posts.build if signed_in?
  end

  def contact
    @page = StaticPage.find_by(name: 'contact')

    #@post = @page.posts.build if signed_in?
  end

  def service
    @page = StaticPage.find_by(name: 'service')

    #@post = @page.posts.build if signed_in?
  end

  def news
    @page = StaticPage.find_by(name: 'news')

    #@post = @page.posts.build if signed_in?
  end

end
