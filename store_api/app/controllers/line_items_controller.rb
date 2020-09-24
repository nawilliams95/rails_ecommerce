class LineItemsController < ApplicationController
  before_action :set_line_item, only: [:show, :update, :destroy]
  before_action :set_cart, only: [:create]

  # GET /line_items
  def index
    @line_items = LineItem.all

    render json: @line_items
  end

  # POST /line_items
  def create
    @product = Product.find(params[:product_id])
    @line_item = @cart.add_product(@product)

    if @line_item.save
      render json: @line_item, status: :created, location: @line_item
    else
      render json: @line_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /line_items/1
  def update
    if @line_item.update(line_item_params)
      render json:  {status: :ok, location: @line_item}
    else
      render json: @line_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /line_items/1
  def destroy
    @cart = Cart.find(session[:cart_id])
    @line_item.destroy
    render json: { head: :no_content }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_line_item
      @line_item = LineItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def line_item_params
      params.require(:line_item).permit(:products_id, :cart_id)
    end
end
