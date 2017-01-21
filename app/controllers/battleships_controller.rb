class BattleshipsController < ApplicationController
  skip_before_action :authenticate_login!

  def index
  end
end
