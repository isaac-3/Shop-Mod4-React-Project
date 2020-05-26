User.destroy_all
Order.destroy_all
Product.destroy_all
Cart.destroy_all
require "pry"
require "faker"

response = Unirest.get "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?sponsored=1&offset=0&store_id=3991&keyword=lamp",
  headers:{
    "X-RapidAPI-Host" => "target-com-store-product-reviews-locations-data.p.rapidapi.com",
    "X-RapidAPI-Key" => "31c5440035mshf5daeac1b76e139p1eb9b1jsn956d499e0482"
  }


products = response.body["products"]
# image ="#{products[0]["images"][0]["base_url"]}" + "#{products[0]["images"][0]["primary"]}"


10.times do 
    User.create({username: Faker::Name.first_name,password:"123",address: Faker::Address.full_address,email: Faker::Internet.email})
end

products.each{|p| Product.create({name: p["title"],description: p["description"],price: p["price"]["current_retail_max"],image:"#{p["images"][0]["base_url"]}" + "#{p["images"][0]["primary"]}"})}


50.times do 
    Cart.create({user_id: User.all.sample.id})
end


100.times do
    Order.create({product_id: Product.all.sample.id ,cart_id: Cart.all.sample.id})
end


