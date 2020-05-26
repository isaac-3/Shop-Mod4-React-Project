class Product < ApplicationRecord
has_many :orders
has_many :carts, through: :orders
has_many :reviews

end

