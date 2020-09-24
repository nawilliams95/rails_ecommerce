class Product < ApplicationRecord
    belongs_to :user, optional: true
    has_many :line_items

    validates :name, :brand, :price, :description, :product_img, presence: true
end
