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
<<<<<<< HEAD
        del_order = cart.orders.select{|o| o.product_id == params[:order][:id]}.first
        upd_orders = cart.orders.select{|o| o.product_id != del_order.product_id}
        cart.update_attribute(:orders, upd_orders)
        render json: cart, :include => [ :orders => {:include => [:product]}]
=======
        # byebug
        del_order = cart.orders.select{|o| o.product_id == params[:order][:id]}.first
        upd_orders = cart.orders.select{|o| o.product_id != del_order.product_id}
        cart.update_attribute(:orders, upd_orders)
        # byebug
        user = User.find_by(id: cart.user_id)
        render json: user, :include => [ :carts => {:include => [:orders => {:include => [:product]}]}]
        # render json: cart, :include => [ :orders => {:include => [:product]}]
>>>>>>> 26d63ad7593f2e4b97163f8ac8346d122adddaf6
    end
    
    def checkout
        # @user = User.find_by(id: params[:id])
        # cart = @user.carts.last
        # cart = Cart.find(params[:id])

    end

end
