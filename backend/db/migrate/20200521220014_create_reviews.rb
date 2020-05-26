class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.text :content
      t.integer :product_id

      t.timestamps
    end
  end
end
