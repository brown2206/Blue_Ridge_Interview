class SessionsController < Devise::SessionsController

  private

  def sign_in_params
    params.require(:user).permit(:name, :email, :password, :remember_me)
  end

end
