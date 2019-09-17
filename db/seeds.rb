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
            'image' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664452/nimbus/users/Trunks_nqw4fa.webp'
        },
        '2' => {
            'username' => 'secretsaiyaman',
            'password' => 'masenko',
            'image' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664452/nimbus/users/Gohan_e7kout.png'
        },
        '3' => {
            'username' => 'rage_man',
            'password' => 'sslegend',
            'image' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664452/nimbus/users/Broly_cys5yk.jpg'
        },
        '4' => {
            'username' => 'pride_man',
            'password' => 'finalflash',
            'image' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664452/nimbus/users/Vegeta_fc87ju.jpg'
        }
    }

    users.each do |key, value|
        value["id"] = key
        User.create!(value)
    end
    
    places = {
        '1' => {
            'name' => 'King Castle Tour',
            'photo' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664719/nimbus/places/main-photos/KingCastle_gdh4yd.jpg',
            'location' => 'Central City',
            'hours' => '7:00 AM - 5:00 PM',
            'user_id' => 1
        },
        '2' => {
            'name' => 'NBS News Station Tour',
            'photo' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664724/nimbus/places/main-photos/NBSNews_h3luyw.png',
            'location' => 'Central City',
            'hours' => '6:00 AM - 12:00 PM',
            'user_id' => 2
        },
        '3' => {
            'name' => 'Orin Temple',
            'photo' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664719/nimbus/places/main-photos/OrinTemple_ljzhiu.png',
            'location' => 'East City',
            'hours' => '8:00 AM - 6:00 PM',
            'user_id' => 3
        },
        '4' => {
            'name' => 'Bamboo Forest Exhibit',
            'photo' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664722/nimbus/places/main-photos/BambooForest_qf42m1.jpg',
            'location' => 'East City',
            'hours' => '9:00 AM - 8:00 PM',
            'user_id' => 4
        },
        '5' => {
            'name' => 'Martial Arts Temple',
            'photo' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664721/nimbus/places/main-photos/MartialArtsTemple_lov0kj.png',
            'location' => 'Papaya Island',
            'hours' => '7:00 AM - 8:00 PM',
            'user_id' => 1
        },
        '6' => {
            'name' => 'Delicious Saikan',
            'photo' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664721/nimbus/places/main-photos/DeliciousSaikan_nndfe0.jpg',
            'location' => 'Papaya Island',
            'hours' => '7:00 AM - 7:00 PM',
            'user_id' => 2
        },
        '7' => {
            'name' => 'Papaya Coffee Shop',
            'photo' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664721/nimbus/places/main-photos/PapayaCoffee_wox0ee.jpg',
            'location' => 'Papaya Island',
            'hours' => '8:00 AM - 4:00 PM',
            'user_id' => 3
        },
        '8' => {
            'name' => 'Capsule Corporation',
            'photo' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664722/nimbus/places/main-photos/CapsuleCorp_qafwb4.png',
            'location' => 'West City',
            'hours' => '7:00 AM - 7:00 PM',
            'user_id' => 4
        },
        '9' => {
            'name' => 'Dream Land',
            'photo' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664723/nimbus/places/main-photos/DreamLand_azzmni.png',
            'location' => 'West City',
            'hours' => '5:00 AM - 9:00 PM',
            'user_id' => 1
        },
        '10' => {
            'name' => 'ZZTV Tour',
            'photo' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664721/nimbus/places/main-photos/ZZTVTour_xg46mn.png',
            'location' => 'West City',
            'hours' => '6:00 AM - 7:00 PM',
            'user_id' => 2
        },
        '11' => {
            'name' => 'Tongari Tower Tour',
            'photo' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568664885/nimbus/places/main-photos/TongariTower_be4ksa.jpg',
            'location' => 'West City',
            'hours' => '9:00 AM - 5:00 PM',
            'user_id' => 3
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
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665017/nimbus/places/photos/KingsCastle_1_b8cdrs.jpg',
            'place_id' => 1,
            'user_id' => 1
        },
        '2' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665016/nimbus/places/photos/KingsCastle_2_m07raj.jpg',
            'place_id' => 1,
            'user_id' => 2
        },
        '3' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665027/nimbus/places/photos/KingsCastle_3_wjdiag.jpg',
            'place_id' => 1,
            'user_id' => 3
        },
        '4' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665123/nimbus/places/photos/KingsCastle_4.jpg',
            'place_id' => 1,
            'user_id' => 1
        },
        '5' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665205/nimbus/places/photos/KingsCastle_5.jpg',
            'place_id' => 1,
            'user_id' => 2
        },
        '6' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665252/nimbus/places/photos/KingsCastle_6.jpg',
            'place_id' => 1,
            'user_id' => 3
        },
        # NBS News Station Tour
        '7' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665020/nimbus/places/photos/NBS_1_rshqbc.jpg',
            'place_id' => 2,
            'user_id' => 4
        },
        '8' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665015/nimbus/places/photos/NBS_2_b81zbc.jpg',
            'place_id' => 2,
            'user_id' => 1
        },
        '9' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665015/nimbus/places/photos/NBS_3_phetvz.jpg',
            'place_id' => 2,
            'user_id' => 2
        },
        # Orin Temple
        '10' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665021/nimbus/places/photos/Orin_1_el1jn4.jpg',
            'place_id' => 3,
            'user_id' => 3
        },
        '11' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665015/nimbus/places/photos/Orin_2_sfnkrk.jpg',
            'place_id' => 3,
            'user_id' => 4
        },
        '12' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665016/nimbus/places/photos/Orin_3_krsyoj.jpg',
            'place_id' => 3,
            'user_id' => 1
        },
        # Bamboo Forest Exhibit
        '13' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665023/nimbus/places/photos/Bamboo_1_iyhg31.jpg',
            'place_id' => 4,
            'user_id' => 2
        },
        '14' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665023/nimbus/places/photos/Bamboo_2_tzgej5.jpg',
            'place_id' => 4,
            'user_id' => 3
        },
        '15' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665021/nimbus/places/photos/Bamboo_3_cfkwhc.jpg',
            'place_id' => 4,
            'user_id' => 4
        },
        # Martial Arts Temple
        '16' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665016/nimbus/places/photos/MATemple_1_xcirm1.jpg',
            'place_id' => 5,
            'user_id' => 1
        },
        '17' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665015/nimbus/places/photos/MATemple_2_ypvhwk.jpg',
            'place_id' => 5,
            'user_id' => 2
        },
        '18' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665015/nimbus/places/photos/MATemple_3_vqibx0.jpg',
            'place_id' => 5,
            'user_id' => 3
        },
        # Delicious Saikan
        '19' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665018/nimbus/places/photos/Delicious_1_jzioqk.jpg',
            'place_id' => 6,
            'user_id' => 4
        },
        '20' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665018/nimbus/places/photos/Delicious_2_rajh0c.jpg',
            'place_id' => 6,
            'user_id' => 1
        },
        '21' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665018/nimbus/places/photos/Delicious_3_cl29py.jpg',
            'place_id' => 6,
            'user_id' => 2
        },
        # Papaya Coffee Shop
        '22' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665018/nimbus/places/photos/CoffeeShop_1_gasdyg.jpg',
            'place_id' => 7,
            'user_id' => 3
        },
        '23' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665019/nimbus/places/photos/CoffeeShop_2_nbkby6.jpg',
            'place_id' => 7,
            'user_id' => 4
        },
        '24' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665018/nimbus/places/photos/CoffeeShop_3_jtetvu.jpg',
            'place_id' => 7,
            'user_id' => 1
        },
        # Capsule Corporation
        '25' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665020/nimbus/places/photos/CapsuleCorp_1_mgfwuw.jpg',
            'place_id' => 8,
            'user_id' => 2
        },
        '26' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665024/nimbus/places/photos/CapsuleCorp_2_s7l2nl.png',
            'place_id' => 8,
            'user_id' => 3
        },
        '27' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665020/nimbus/places/photos/CapsuleCorp_3_x68wrq.png',
            'place_id' => 8,
            'user_id' => 4
        },
        # Dream Land
        '28' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665017/nimbus/places/photos/DreamLand_1_yzf04i.jpg',
            'place_id' => 9,
            'user_id' => 1
        },
        '29' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665017/nimbus/places/photos/DreamLand_2_kausbi.jpg',
            'place_id' => 9,
            'user_id' => 2
        },
        '30' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665017/nimbus/places/photos/DreamLand_3_w3porn.jpg',
            'place_id' => 9,
            'user_id' => 3
        },
        # ZZTV Tour
        '31' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665013/nimbus/places/photos/ZZTV_1_vh4jvt.jpg',
            'place_id' => 10,
            'user_id' => 4
        },
        '32' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665013/nimbus/places/photos/ZZTV_2_gpo2ad.jpg',
            'place_id' => 10,
            'user_id' => 1
        },
        '33' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665013/nimbus/places/photos/ZZTV_3_athqgm.jpg',
            'place_id' => 10,
            'user_id' => 2
        },
        # Tongari Tower Tour
        '34' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665013/nimbus/places/photos/Tongari_1_f2ynzt.jpg',
            'place_id' => 11,
            'user_id' => 3
        },
        '35' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665013/nimbus/places/photos/Tongari_2_eimuvw.jpg',
            'place_id' => 11,
            'user_id' => 4
        },
        '36' => {
            'url' => 'https://res.cloudinary.com/nimbus-app/image/upload/v1568665013/nimbus/places/photos/Tongari_3_bpirqt.jpg',
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