class CartsController < ApplicationController

    def create
        cart = Cart.create({
            user_id: params[:user_id]
        })
        user = User.find(params[:user_id])
        render json: user, :include => [ :carts => {:include => [:orders => {:include => [:product]}]}]
    end

    def show
        cart = Cart.find(params[:id])
    end

    def update
        cart = Cart.find(params[:id])
        if(params[:order] == nil)
            newProd = Product.create({
                title: params[:newProd][:title],
                price: params[:newProd][:price][:current_retail],
                image: params[:newProd][:image],
                description: params[:newProd][:description]
            })

            newOrder = Order.create({
                product_id: newProd.id,
                cart_id: cart.id
            })

            new_add_order = cart.orders.push(newOrder)
            cart.update_attribute(:orders, new_add_order)
            user = User.find_by(id: cart.user_id)
            render json: user, :include => [ :carts => {:include => [:orders => {:include => [:product]}]}]
        else
            del_order = cart.orders.select{|o| o.product_id == params[:order][:product_id]}.first
            upd_orders = cart.orders.select{|o| o.product_id != del_order.product_id}
            cart.update_attribute(:orders, upd_orders)
            user = User.find_by(id: cart.user_id)
            render json: user, :include => [ :carts => {:include => [:orders => {:include => [:product]}]}]
        end
    end
    
    def checkout
        # @user = User.find_by(id: params[:id])
        # cart = @user.carts.last
        # cart = Cart.find(params[:id])

    end

end
