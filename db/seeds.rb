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

    User.create!(users)
    
    places = {
        '1' => {
            'name' => 'King Castle Tour',
            'photo' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/KingCastle.jpg',
            'location' => 'Central City',
            'hours' => '7:00 AM - 5:00 PM'
        },
        '2' => {
            'name' => 'NBS News Station Tour',
            'photo' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/NBSNews.jpg',
            'location' => 'Central City',
            'hours' => '6:00 AM - 12:00 PM'
        },
        '3' => {
            'name' => 'Orin Temple',
            'photo' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/OrinTemple.jpg',
            'location' => 'East City',
            'hours' => '8:00 AM - 6:00 PM'
        },
        '4' => {
            'name' => 'Bamboo Forest Exhibit',
            'photo' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/BambooForest.jpg',
            'location' => 'East City',
            'hours' => '9:00 AM - 8:00 PM'
        },
        '5' => {
            'name' => 'Martial Arts Temple',
            'photo' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/MartialArtsTemple.jpg',
            'location' => 'Papaya Island',
            'hours' => '7:00 AM - 8:00 PM'
        },
        '6' => {
            'name' => 'Delicious Saikan',
            'photo' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/DeliciousSaikan.jpg',
            'location' => 'Papaya Island',

        },
        '7' => {
            'name' => 'Papaya Coffee Shop',
            'photo' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/PapayaCoffee.jpg',
            'location' => 'Papaya Island',
            'hours' => '8:00 AM - 4:00 PM'
        },
        '8' => {
            'name' => 'Capsule Corporation',
            'photo' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/CapsuleCorp.jpg',
            'location' => 'West City',
            'hours' => '7:00 AM - 7:00 PM'
        },
        '9' => {
            'name' => 'Dream Land',
            'photo' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/DreamLand.jpg',
            'location' => 'West City',
            'hours' => '5:00 AM - 9:00 PM'
        },
        '10' => {
            'name' => 'ZZTV Tour',
            'photo' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/ZZTVTour.jpg',
            'location' => 'West City',
            'hours' => '6:00 AM - 7:00 PM'
        },
        '11' => {
            'name' => 'Tongari Tower Tour',
            'photo' => 'https://nimbusham.s3-us-west-1.amazonaws.com/Nimbus/TongariTower.jpg',
            'location' => 'West City',
            'hours' => '9:00 AM - 5:00 PM'
        }
    }

    Place.create!(places)

    tags = {
        '1' => {
            'name' => 'Temple'
        },
        '2' => {
            'name' => 'Food'
        },
        '3' => {
            'name' => 'TV'
        }.
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

    Tag.create!(tags)

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

    Tagging.create!(taggings)

    
end