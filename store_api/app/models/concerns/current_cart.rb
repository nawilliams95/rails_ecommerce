module CurrentCart

    private
  
        def set_cart
            @cart = Cart.find(session[:cart_id])
        rescue ActiveRecord::RecordNotFound
            @cart = Cart.create
            session[:cart_id] = @cart.id
        end
  
end

=begin 
If a cart_id isn't found we create one and associate it's id to the user's session. This ultimately allows us to reference any type of user without needing them to create some sort of account or sign in anywhere first.
=end 