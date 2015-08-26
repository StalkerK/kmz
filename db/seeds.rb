# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
    pages = StaticPage.create([{name: 'main'}, {name: 'contact'}, {name: 'service'}, {name: 'product'}, {name: 'news'}, {name: 'about'}])
    user = User.new({:email=>"sauron2024@ya.ru",:password=>"1111111111"}).save(:validate=>false)