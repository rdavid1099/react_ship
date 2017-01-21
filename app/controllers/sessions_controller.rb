class SessionsController < ApplicationController
  skip_before_action :authenticate_login!

  def create
    if user = User.from_omniauth(request.env['omniauth.auth'])
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      flash[:error] = 'There was a problem logging in with Twitter. Check Username and/or Password.'
      redirect_to root_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
