# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    User.destroy_all
    Place.destroy_all
    Tag.destroy_all
    Tagging.destroy_all
    Photo.destroy_all
    Review.destroy_all

    users = {
        '1' => {
            'username' => 'trunksofdafuture',
            'password' => 'bustercannon',
            'image' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Users/Trunks.jpg'
        },
        '2' => {
            'username' => 'secretsaiyaman',
            'password' => 'masenko',
            'image' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Users/Gohan.jpg'
        },
        '3' => {
            'username' => 'rage_man',
            'password' => 'sslegend',
            'image' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Users/Broly.jpg'
        },
        '4' => {
            'username' => 'pride_man',
            'password' => 'finalflash',
            'image' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Users/Vegeta.jpg'
        }
    }

    users.each do |key, value|
        value["id"] = key
        User.create!(value)
    end
    
    places = {
        '1' => {
            'name' => 'King Castle Tour',
            'photo' => 'https://vignette.wikia.nocookie.net/dragonball/images/5/58/KingCastle.jpg/revision/latest?cb=20100415061052',
            'location' => 'Central City',
            'hours' => '7:00 AM - 5:00 PM'
        },
        '2' => {
            'name' => 'NBS News Station Tour',
            'photo' => 'https://vignette.wikia.nocookie.net/dragonball/images/c/c8/Nbsafterkingpiccolo.png/revision/latest?cb=20110811042609',
            'location' => 'Central City',
            'hours' => '6:00 AM - 12:00 PM'
        },
        '3' => {
            'name' => 'Orin Temple',
            'photo' => 'https://vignette.wikia.nocookie.net/dragonball/images/e/e0/Orin_Temple.png/revision/latest/scale-to-width-down/180?cb=20120823090815',
            'location' => 'East City',
            'hours' => '8:00 AM - 6:00 PM'
        },
        '4' => {
            'name' => 'Bamboo Forest Exhibit',
            'photo' => 'http://d17oknutsq9rw.cloudfront.net/wp-content/uploads/2016/05/09161338/15723813830_77dde6c570_h-800x450.jpg',
            'location' => 'East City',
            'hours' => '9:00 AM - 8:00 PM'
        },
        '5' => {
            'name' => 'Martial Arts Temple',
            'photo' => 'https://static.planetminecraft.com/files/resource_media/screenshot/1432/dbzarena7974238.jpg',
            'location' => 'Papaya Island',
            'hours' => '7:00 AM - 8:00 PM'
        },
        '6' => {
            'name' => 'Delicious Saikan',
            'photo' => 'https://cdnb.artstation.com/p/assets/images/images/010/011/507/large/manohar-soans-ichiraku-ramen-interior3.jpg?1522084867',
            'location' => 'Papaya Island',
            'hours' => '7:00 AM - 7:00 PM'
        },
        '7' => {
            'name' => 'Papaya Coffee Shop',
            'photo' => 'https://cdna.artstation.com/p/assets/images/images/012/900/714/large/amanda-ejiri-1.jpg?1537104580',
            'location' => 'Papaya Island',
            'hours' => '8:00 AM - 4:00 PM'
        },
        '8' => {
            'name' => 'Capsule Corporation',
            'photo' => 'https://vignette.wikia.nocookie.net/dragonball/images/3/32/Capsule_Corporation_DBZ_Ep_207_001.png/revision/latest?cb=20170827042823',
            'location' => 'West City',
            'hours' => '7:00 AM - 7:00 PM'
        },
        '9' => {
            'name' => 'Dream Land',
            'photo' => 'https://vignette.wikia.nocookie.net/dragonball/images/a/a7/Dream_Land_DB_Ep_44_001.png/revision/latest?cb=20171105190533',
            'location' => 'West City',
            'hours' => '5:00 AM - 9:00 PM'
        },
        '10' => {
            'name' => 'ZZTV Tour',
            'photo' => 'https://vignette.wikia.nocookie.net/dragonball/images/0/0b/ZTVHQ02.png/revision/latest?cb=20091202104939',
            'location' => 'West City',
            'hours' => '6:00 AM - 7:00 PM'
        },
        '11' => {
            'name' => 'Tongari Tower Tour',
            'photo' => 'https://vignette.wikia.nocookie.net/dragonball/images/b/bc/Korin_Tower_DBZ_Ep_217_001.png/revision/latest?cb=20170827070705',
            'location' => 'West City',
            'hours' => '9:00 AM - 5:00 PM'
        }
    }

    places.each do |key, value|
        value["id"] = key
        Place.create!(value)
    end

    tags = {
        '1' => {
            'name' => 'Temple'
        },
        '2' => {
            'name' => 'Food'
        },
        '3' => {
            'name' => 'TV'
        },
        '4' => {
            'name' => 'Nature'
        },
        '5' => {
            'name' => 'Technical'
        },
        '6' => {
            'name' => 'Park'
        },
        '7' => {
            'name' => 'Historical'
        }
    }

    tags.each do |key, value|
        value["id"] = key
        Tag.create!(value)
    end

    taggings = {
        '1' => {
            'tag_id' => 1,
            'place_id' => 3
        },
        '2' => {
            'tag_id' => 1,
            'place_id' => 5
        },
        '3' => {
            'tag_id' => 2,
            'place_id' => 6
        },
        '4' => {
            'tag_id' => 2,
            'place_id' => 7
        },
        '5' => {
            'tag_id' => 3,
            'place_id' => 2
        },
        '6' => {
            'tag_id' => 3,
            'place_id' => 10
        },
        '7' => {
            'tag_id' => 4,
            'place_id' => 4
        },
        '8' => {
            'tag_id' => 5,
            'place_id' => 8
        },
        '9' => {
            'tag_id' => 6,
            'place_id' => 9
        },
        '10' => {
            'tag_id' => 7,
            'place_id' => 1
        },
        '11' => {
            'tag_id' => 5,
            'place_id' => 11
        },
        '12' => {
            'tag_id' => 7,
            'place_id' => 5
        }
    }

    taggings.each do |key, value|
        value["id"] = key
        Tagging.create!(value)
    end

    photos = {
        # King Castle Tour
        '1' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/KingsCastle_1.jpg',
            'place_id' => 1,
            'user_id' => 1
        },
        '2' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/KingsCastle_2.jpg',
            'place_id' => 1,
            'user_id' => 2
        },
        '3' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/KingsCastle_3.jpg',
            'place_id' => 1,
            'user_id' => 3
        },
        # NBS News Station Tour
        '4' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/NBS_1.jpg',
            'place_id' => 2,
            'user_id' => 4
        },
        '5' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/NBS_2.jpg',
            'place_id' => 2,
            'user_id' => 1
        },
        '6' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/NBS_3.jpg',
            'place_id' => 2,
            'user_id' => 2
        },
        # Orin Temple
        '7' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Orin_1.jpg',
            'place_id' => 3,
            'user_id' => 3
        },
        '8' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Orin_2.jpg',
            'place_id' => 3,
            'user_id' => 4
        },
        '9' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Orin_3.jpg',
            'place_id' => 3,
            'user_id' => 1
        },
        # Bamboo Forest Exhibit
        '10' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Bamboo_1.jpg',
            'place_id' => 4,
            'user_id' => 2
        },
        '11' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Bamboo_2.jpg',
            'place_id' => 4,
            'user_id' => 3
        },
        '12' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Bamboo_3.jpg',
            'place_id' => 4,
            'user_id' => 4
        },
        # Martial Arts Temple
        '13' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/MATemple_1.jpg',
            'place_id' => 5,
            'user_id' => 1
        },
        '14' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/MATemple_2.jpg',
            'place_id' => 5,
            'user_id' => 2
        },
        '15' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/MATemple_3.jpg',
            'place_id' => 5,
            'user_id' => 3
        },
        # Delicious Saikan
        '16' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Delicious_1.jpg',
            'place_id' => 6,
            'user_id' => 4
        },
        '17' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Delicious_2.jpg',
            'place_id' => 6,
            'user_id' => 1
        },
        '18' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Delicious_3.jpg',
            'place_id' => 6,
            'user_id' => 2
        },
        # Papaya Coffee Shop
        '19' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CoffeeShop_1.jpg',
            'place_id' => 7,
            'user_id' => 3
        },
        '20' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CoffeeShop_2.jpg',
            'place_id' => 7,
            'user_id' => 4
        },
        '21' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CoffeeShop_3.jpg',
            'place_id' => 7,
            'user_id' => 1
        },
        # Capsule Corporation
        '22' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CapsuleCorp_1.jpg',
            'place_id' => 8,
            'user_id' => 2
        },
        '23' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CapsuleCorp_2.jpg',
            'place_id' => 8,
            'user_id' => 3
        },
        '24' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CapsuleCorp_3.jpg',
            'place_id' => 8,
            'user_id' => 4
        },
        # Dream Land
        '25' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/DreamLand_1.jpg',
            'place_id' => 9,
            'user_id' => 1
        },
        '26' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/DreamLand_2.jpg',
            'place_id' => 9,
            'user_id' => 2
        },
        '27' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/DreamLand_3.jpg',
            'place_id' => 9,
            'user_id' => 3
        },
        # ZZTV Tour
        '28' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/ZZTV_1.jpg',
            'place_id' => 10,
            'user_id' => 4
        },
        '29' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/ZZTV_2.jpg',
            'place_id' => 10,
            'user_id' => 1
        },
        '30' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/ZZTV_3.jpg',
            'place_id' => 10,
            'user_id' => 2
        },
        # Tongari Tower Tour
        '31' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Tongari_1.jpg',
            'place_id' => 11,
            'user_id' => 3
        },
        '32' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Tongari_2.jpg',
            'place_id' => 11,
            'user_id' => 4
        },
        '33' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Tongari_3.jpg',
            'place_id' => 11,
            'user_id' => 1
        },
    }

    photos.each do |key, value|
        value["id"] = key
        Photo.create!(value)
    end

    reviews = {
        # King Castle Tour
        '1' => {
            'rating' => 3,
            'body' => 'Was Good! but not great.',
            'price_rating' => 2,
            'author_id' => 1,
            'place_id' => 1
        },
        '2' => {
            'rating' => 4,
            'body' => 'Was Amazing! but not the best.',
            'price_rating' => 1,
            'author_id' => 2,
            'place_id' => 1
        },
        '3' => {
            'rating' => 5,
            'body' => 'Was the best!',
            'price_rating' => 2,
            'author_id' => 3,
            'place_id' => 1
        },
        '4' => {
            'rating' => 3,
            'body' => 'Was Great! I liked the Castle a lot!',
            'price_rating' => 2,
            'author_id' => 4,
            'place_id' => 1
        },
        # NBS News Station Tour
        '5' => {
            'rating' => 5,
            'body' => 'Was pretty fun seeing all the TVs!',
            'price_rating' => 3,
            'author_id' => 1,
            'place_id' => 2
        },
        '6' => {
            'rating' => 4,
            'body' => 'I like NBS, so I liked this tour!',
            'price_rating' => 2,
            'author_id' => 2,
            'place_id' => 2
        },
        '7' => {
            'rating' => 4,
            'body' => 'I thought the tour was great, but I did not like the food options.',
            'price_rating' => 4,
            'author_id' => 3,
            'place_id' => 2
        },
        '8' => {
            'rating' => 3,
            'body' => 'I liked seeing all the things at the station, but the food was really bad!',
            'price_rating' => 3,
            'author_id' => 4,
            'place_id' => 2
        },
        # Orin Temple
        '9' => {
            'rating' => 5,
            'body' => 'Was a peaceful experience.',
            'price_rating' => 1,
            'author_id' => 1,
            'place_id' => 3
        },
        '10' => {
            'rating' => 5,
            'body' => 'I really liked the view there!',
            'price_rating' => 2,
            'author_id' => 2,
            'place_id' => 3
        },
        '11' => {
            'rating' => 4,
            'body' => 'I loved the scenery, but there were too many insects everywhere.',
            'price_rating' => 2,
            'author_id' => 3,
            'place_id' => 3
        },
        '12' => {
            'rating' => 5,
            'body' => 'Everything was great! From the scenery to the food offered',
            'price_rating' => 1,
            'author_id' => 4,
            'place_id' => 3
        },
        # Bamboo Forest Exhibit
        '13' => {
            'rating' => 4,
            'body' => 'Was very calming, but a lot of insects.',
            'price_rating' => 3,
            'author_id' => 1,
            'place_id' => 4
        },
        '14' => {
            'rating' => 3,
            'body' => 'Was a great exhibit, but was very expensive for what we got.',
            'price_rating' => 5,
            'author_id' => 2,
            'place_id' => 4
        },
        '15' => {
            'rating' => 3,
            'body' => 'I enjoyed the exhibit, but I think the bamboo was fake.',
            'price_rating' => 3,
            'author_id' => 3,
            'place_id' => 4
        },
        '16' => {
            'rating' => 5,
            'body' => 'Was a great exhibit, nothing wrong!',
            'price_rating' => 3,
            'author_id' => 4,
            'place_id' => 4
        },
        # Martial Arts Temple
        '17' => {
            'rating' => 2,
            'body' => 'This was a horrible experience, once I got there, I got beat up! But the prices were great.',
            'price_rating' => 1,
            'author_id' => 1,
            'place_id' => 5
        },
        '18' => {
            'rating' => 4,
            'body' => 'Was a great experience, I was able to beat everyone up! But the prices were terrible.',
            'price_rating' => 5,
            'author_id' => 2,
            'place_id' => 5
        },
        '19' => {
            'rating' => 3,
            'body' => 'The temple itself was nice, but the announcer hated me!',
            'price_rating' => 2,
            'author_id' => 3,
            'place_id' => 5
        },
        '20' => {
            'rating' => 5,
            'body' => 'Was a great place! Nothing wrong to report here!',
            'price_rating' => 1,
            'author_id' => 4,
            'place_id' => 5
        },
        # Delicious Saikan
        '21' => {
            'rating' => 5,
            'body' => 'I love getting the Ramen here!',
            'price_rating' => 2,
            'author_id' => 1,
            'place_id' => 6
        },
        '22' => {
            'rating' => 3,
            'body' => "Love the atmosphere of the place, but the food isn't amazing.",
            'price_rating' => 3,
            'author_id' => 2,
            'place_id' => 6
        },
        '23' => {
            'rating' => 5,
            'body' => 'Everything is amazing here!',
            'price_rating' => 1,
            'author_id' => 3,
            'place_id' => 6
        },
        '24' => {
            'rating' => 1,
            'body' => 'Had a horrible experience here, the wait was so long!',
            'price_rating' => 2,
            'author_id' => 4,
            'place_id' => 6
        },
        # Papaya Coffee Shop
        '25' => {
            'rating' => 5,
            'body' => 'I really liked the lifetime supply of candles they offered here along with the coffee.',
            'price_rating' => 3,
            'author_id' => 1,
            'place_id' => 7
        },
        '26' => {
            'rating' => 3,
            'body' => 'The coffee was great, but very expensive!',
            'price_rating' => 5,
            'author_id' => 2,
            'place_id' => 7
        },
        '27' => {
            'rating' => 4,
            'body' => 'Everything was great here, but the service was slow!',
            'price_rating' => 3,
            'author_id' => 3,
            'place_id' => 7
        },
        '28' => {
            'rating' => 5,
            'body' => 'Everything was great! No complaints!',
            'price_rating' => 1,
            'author_id' => 4,
            'place_id' => 7
        },
        # Capsule Corporation
        '29' => {
            'rating' => 4,
            'body' => 'Some of the capsules were a little expensive, but the store looks great.',
            'price_rating' => 3,
            'author_id' => 1,
            'place_id' => 8
        },
        '30' => {
            'rating' => 4,
            'body' => 'The owner of this establishment was very rude to me, but the capsules are awesome!',
            'price_rating' => 1,
            'author_id' => 2,
            'place_id' => 8
        },
        '31' => {
            'rating' => 1,
            'body' => 'Was very horrible! Got kicked out before I could even buy anything!',
            'price_rating' => 3,
            'author_id' => 3,
            'place_id' => 8
        },
        '32' => {
            'rating' => 5, 
            'body' => "Was an awesome experience! It's not like I know the owner or anything!",
            'price_rating' => 1,
            'author_id' => 4,
            'place_id' => 8
        },
        # Dream Land
        '33' => {
            'rating' => 4,
            'body' => 'Was a great theme park, but there was trash everywhere!',
            'price_rating' => 1,
            'author_id' => 1,
            'place_id' => 9
        },
        '34' => {
            'rating' => 4,
            'body' => 'Was cool, but the ferris wheel almost crashed!',
            'price_rating' => 2,
            'author_id' => 2,
            'place_id' => 9
        },
        '35' => {
            'rating' => 2,
            'body' => 'This was a great theme park, but it was so expensive!',
            'price_rating' => 5,
            'author_id' => 3,
            'place_id' => 9
        },
        '36' => {
            'rating' => 4,
            'body' => 'Was cool and all, but the owner hates me!',
            'price_rating' => 2,
            'author_id' => 4,
            'place_id' => 9
        },
        # ZZTV Tour
        '37' => {
            'rating' => 1,
            'body' => 'Was pretty boring to be honest.',
            'price_rating' => 3,
            'author_id' => 1,
            'place_id' => 10
        },
        '38' => {
            'rating' => 1,
            'body' => 'Do they not have air conditioning at the station!?!',
            'price_rating' => 2,
            'author_id' => 2,
            'place_id' => 10
        },
        '39' => {
            'rating' => 2,
            'body' => "I don't even know why this is a thing!",
            'price_rating' => 2,
            'author_id' => 3,
            'place_id' => 10
        },
        '40' => {
            'rating' => 3,
            'body' => 'Why did I even come here.',
            'price_rating' => 3,
            'author_id' => 4,
            'place_id' => 10
        },
        # Tongari Tower Tour
        '41' => {
            'rating' => 4,
            'body' => 'Was good! but not the best thing in the world!',
            'price_rating' => 2,
            'author_id' => 1,
            'place_id' => 11
        },
        '42' => {
            'rating' => 5,
            'body' => 'Was the best thing ever!',
            'price_rating' => 2,
            'author_id' => 2,
            'place_id' => 11
        },
        '43' => {
            'rating' => 3,
            'body' => 'Why was it so expensive!?!',
            'price_rating' => 5,
            'author_id' => 3,
            'place_id' => 11
        },
        '44' => {
            'rating' => 2,
            'body' => 'I hate this tour, it was so boring!',
            'price_rating' => 3,
            'author_id' => 4,
            'place_id' => 11
        },
    }

    reviews.each do |key, value|
        value["id"] = key
        Review.create!(value)
    end
end