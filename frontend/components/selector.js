export const getPlaces = (places) => {
    return Object.values(places);
}

export const getReviews = (reviews, place_id) => {
    new_reviews = [];
    for(var i in reviews){
        if (reviews[i].place_id === place_id){
            new_reviews.push(reviews[i])
        }
    }
    return new_reviews;
}

export const getUsers = (users, filtered_reviews) => {
    author_ids = [];
    new_users = [];
    for(var i = 0; i <= filtered_reviews.length - 1; i++){
        author_ids.push(filtered_reviews[i].user_id)
    }
    for(var j in users){
        if author_ids.includes(users[j].id){
            
        }
    }
}

export const getPhotos = (photos, place_id) => {
    new_photos = [];
    for (var i in photos) {
        if (photos[i].place_id === place_id) {
            new_photos.push(photos[i])
        }
    }
    return new_photos;
}