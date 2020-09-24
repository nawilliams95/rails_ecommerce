class CartsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :invalid_cart
  before_action :set_cart, only: [:show, :update, :destroy]

  # GET /carts
  def index 
    # @cart = Cart.all
    render 'hello'
    # render json: @cart
  end

  # POST /carts
  # def create
  #   @cart = Cart.new(cart_params)

  #   if @cart.save
  #     render json: @cart,  status: :created, location: @cart
  #   else
  #     render json: @cart.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /carts/1
  # def update
  #   if @cart.update(cart_params)
  #     render json: { status: :ok, location: @cart }
  #   else
  #     render json: @cart.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /carts/1
  # def destroy
  #   @cart.destroy if @cart.id == session[:cart_id]
  #   session[:cart_id] = nil
  #   render json: { head: :no_content }
  # end

  # private
    # Use callbacks to share common setup or constraints between actions.
    # def set_cart
    #   @cart = Cart.find(params[:id])
    # end

    # # Only allow a trusted parameter "white list" through.
    # def cart_params
    #   params.fetch(:cart, {})
    # end

    # def invalid_cart
    #   logger.error "Attempt to access invalid cart #{params[:id]}"
    #   redirect_to root_path, notice: "That cart doesn't exist"
    # end
end
