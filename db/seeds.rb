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
            'image' => 'https://lh3.googleusercontent.com/mSoCsh4-07g108to8TjpnDp9nr-hG9g9sZ_tsOlJeBcQPBmjd_rRICbM50McH9eUQ6HCMg=s85'
        },
        '2' => {
            'username' => 'secretsaiyaman',
            'password' => 'masenko',
            'image' => 'https://lh3.googleusercontent.com/vbji9EC4xvRcNh26hXNCbSZqrbuRGExqKrcg9Ifvm648MoPdxrx4_rv7ZJc47-_zVY0sCLw=s85'
        },
        '3' => {
            'username' => 'rage_man',
            'password' => 'sslegend',
            'image' => 'https://lh3.googleusercontent.com/S0r3KwQjNpUuSKDZCK03gzN6v-9qMJ8vtsPEifgpw30L_gqjRjG5Tg8F6GAdx4iws9UgQg=s151'
        },
        '4' => {
            'username' => 'pride_man',
            'password' => 'finalflash',
            'image' => 'https://lh3.googleusercontent.com/w3gKj0k5rxN4B7aMGnotQ_XfSSjnZ6wSg0Sy3V-6RtQtKIO1yazz61Lu7AAsndIKcyhJrg=s85'
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
            'url' => 'https://lh3.googleusercontent.com/g6V1SZrLfXUQoqJRuskUpBQ-9qpun9_4IxsAhUFMcyG4JF3ymUBHum7FgdrFrBfH7JME0WM=s85',
            'place_id' => 1,
            'user_id' => 1
        },
        '2' => {
            'url' => 'https://lh3.googleusercontent.com/j9xWeX4yqaUsYFs8Z4--og5arO584Xxu7LO_KyCu4QoT7NXtGozT6ueHF_9s31l2zbodbQ=s113',
            'place_id' => 1,
            'user_id' => 2
        },
        '3' => {
            'url' => 'https://lh3.googleusercontent.com/4bExLdcgldVbQl99gKszYgAx9pBM5PeCAQwVCamEON7bmwUrXanv79mGHAfu_TTrzczB7A=s117',
            'place_id' => 1,
            'user_id' => 3
        },
        '4' => {
            'url' => 'data:image/jpeg;base64,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',
            'place_id' => 1,
            'user_id' => 1
        },
        '5' => {
            'url' => 'data:image/jpeg;base64,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',
            'place_id' => 1,
            'user_id' => 2
        },
        '6' => {
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS-PJaX4t3__duQZitYq8LlsgC7iW--YjH_n6b9ivSFsK-Luag',
            'place_id' => 1,
            'user_id' => 3
        },
        # NBS News Station Tour
        '7' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/NBS_1.jpg',
            'place_id' => 2,
            'user_id' => 4
        },
        '8' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/NBS_2.jpg',
            'place_id' => 2,
            'user_id' => 1
        },
        '9' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/NBS_3.jpg',
            'place_id' => 2,
            'user_id' => 2
        },
        # Orin Temple
        '10' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Orin_1.jpg',
            'place_id' => 3,
            'user_id' => 3
        },
        '11' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Orin_2.jpg',
            'place_id' => 3,
            'user_id' => 4
        },
        '12' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Orin_3.jpg',
            'place_id' => 3,
            'user_id' => 1
        },
        # Bamboo Forest Exhibit
        '13' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Bamboo_1.jpg',
            'place_id' => 4,
            'user_id' => 2
        },
        '14' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Bamboo_2.jpg',
            'place_id' => 4,
            'user_id' => 3
        },
        '15' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Bamboo_3.jpg',
            'place_id' => 4,
            'user_id' => 4
        },
        # Martial Arts Temple
        '16' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/MATemple_1.jpg',
            'place_id' => 5,
            'user_id' => 1
        },
        '17' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/MATemple_2.jpg',
            'place_id' => 5,
            'user_id' => 2
        },
        '18' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/MATemple_3.jpg',
            'place_id' => 5,
            'user_id' => 3
        },
        # Delicious Saikan
        '19' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Delicious_1.jpg',
            'place_id' => 6,
            'user_id' => 4
        },
        '20' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Delicious_2.jpg',
            'place_id' => 6,
            'user_id' => 1
        },
        '21' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Delicious_3.jpg',
            'place_id' => 6,
            'user_id' => 2
        },
        # Papaya Coffee Shop
        '22' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CoffeeShop_1.jpg',
            'place_id' => 7,
            'user_id' => 3
        },
        '21' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CoffeeShop_2.jpg',
            'place_id' => 7,
            'user_id' => 4
        },
        '22' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CoffeeShop_3.jpg',
            'place_id' => 7,
            'user_id' => 1
        },
        # Capsule Corporation
        '23' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CapsuleCorp_1.jpg',
            'place_id' => 8,
            'user_id' => 2
        },
        '24' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CapsuleCorp_2.jpg',
            'place_id' => 8,
            'user_id' => 3
        },
        '25' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/CapsuleCorp_3.jpg',
            'place_id' => 8,
            'user_id' => 4
        },
        # Dream Land
        '26' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/DreamLand_1.jpg',
            'place_id' => 9,
            'user_id' => 1
        },
        '27' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/DreamLand_2.jpg',
            'place_id' => 9,
            'user_id' => 2
        },
        '28' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/DreamLand_3.jpg',
            'place_id' => 9,
            'user_id' => 3
        },
        # ZZTV Tour
        '29' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/ZZTV_1.jpg',
            'place_id' => 10,
            'user_id' => 4
        },
        '30' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/ZZTV_2.jpg',
            'place_id' => 10,
            'user_id' => 1
        },
        '31' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/ZZTV_3.jpg',
            'place_id' => 10,
            'user_id' => 2
        },
        # Tongari Tower Tour
        '32' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Tongari_1.jpg',
            'place_id' => 11,
            'user_id' => 3
        },
        '33' => {
            'url' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/Photos/Tongari_2.jpg',
            'place_id' => 11,
            'user_id' => 4
        },
        '34' => {
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