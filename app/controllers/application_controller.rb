class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user
  helper_method :logged_in?
  before_action :authenticate_login!

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    !current_user.nil?
  end

  private
    def authenticate_login!
      render file: 'public/404.html' unless logged_in?
    end
end
