# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.create([
    {name: 'Low-Rise blue Sneakers', price: 25.50, description: 'Classic low-top blue sneakers with blue laces, a white sole. Can be dressed up or down. perfect for any occation', product_img:'https://i.ibb.co/b6FcLvT/hero-1.png', brand: 'NtEtsy', user_id: 1},
    {name: 'Low-Rise grey Sneakers', price: 25.50, description: 'Classic low-top grey sneakers with tan laces, a white sole and tan trim. Can be dressed up or down. perfect for any occation', product_img:'https://i.ibb.co/Kmt39NB/prod-2.png', brand: 'NtEtsy', user_id: 1},
    {name: 'Yellow Bommer Jacket', price: 50.50, description: 'Classic yellow bomber jacket with balck sleeve trims and balck linning. Show of your swag with this must have jacket', product_img:'https://i.ibb.co/2sNRD5f/model-7.png', brand: 'NtEtsy', user_id: 1},
    {name: 'white Tribal Polo', price: 20.00, description: 'White tribal prtinteed polo', product_img:'https://i.ibb.co/Lkb3V27/cloth-2.jpg', brand: 'NtEtsy', user_id: 1},
    {name: 'Graphic Tank', price: 23.50, description: 'Unique graphic tank to stunt in', product_img:'https://i.ibb.co/4ZgXtQN/cloth-1.jpg', brand: 'NtEtsy', user_id: 1},
    {name: 'Black Tank', price: 21.60, description: 'Plain black tank top', product_img:'https://i.ibb.co/m67sPGs/model-3.png', brand: 'NtEtsy', user_id: 1},
    {name: 'Too Cool Jean Jacket', price: 30.50, description: 'Classic jean Jacket. Why change what works?', product_img:'https://i.ibb.co/gJWdRYG/model-5.png', brand: 'NtEtsy', user_id: 1},
])

puts "Seeded Database"