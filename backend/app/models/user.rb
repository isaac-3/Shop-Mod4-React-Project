class User < ApplicationRecord
    has_secure_password
    validates :username, :presence => true, :uniqueness => true

    has_many :carts
    has_many :orders, through: :carts
    has_many :products, through: :orders
    has_many :reviews
end

