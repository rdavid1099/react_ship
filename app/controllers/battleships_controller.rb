class BattleshipsController < ApplicationController
  skip_before_action :authenticate_login!, only: [:index]

  def index
  end

  def show
  end
end
