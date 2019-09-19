export const getPlaces = (places) => {
    return Object.values(places);
}

export const getReviews = (reviews, place_id) => {
    let new_reviews = [];
    for(var i in reviews){
        if (reviews[i].place_id === place_id){
            new_reviews.push(reviews[i])
        }
    }
    return new_reviews;
}

export const getUsers = (users, filtered_reviews) => {
    let author_ids = [];
    let new_users = [];
    for(var i = 0; i <= filtered_reviews.length - 1; i++){
        author_ids.push(filtered_reviews[i].user_id)
    }
    for(var j in users){
        if (author_ids.includes(users[j].id)){
            new_users.push(users[j])
        }
    }
    return new_users;
}

export const getPhotos = (photos, place_id) => {
    let new_photos = [];
    for (var i in photos) {
        if (photos[i].place_id === place_id) {
            new_photos.push(photos[i])
        }
    }
    return new_photos;
}

export const getReviewsForUser = (reviews, user_id) => {
        let new_reviews = [];
        for (var i in reviews) {
            if (reviews[i].author_id === user_id) {
                new_reviews.push(reviews[i])
            }
        }
        return new_reviews;
}

export const getPlacesForUser = (places, filtered_reviews) => {
    let place_ids = [];
    let new_places = [];
    for (var i = 0; i <= filtered_reviews.length - 1; i++) {
        place_ids.push(filtered_reviews[i].place_id)
    }
    for (var j in places) {
        if (place_ids.includes(places[j].id)) {
            new_places.push(places[j])
        }
    }
    return new_places;
}

export const getPhotosForUser = (photos, id) => {
    let new_photos = [];
    for (var i in photos) {
        if (photos[i].id === id) {
            new_photos.push(photos[i])
        }
    }
    return new_photos;
}

export const getPhotosFiltered = (photos, user_id, places) => {
    let user_photos = getPhotosForUser(photos, user_id);
    let filtered_photos = {};
    places.map((place) => {
        filtered_photos[place.id] = []
    });
    user_photos.map((photo) => {
        filtered_photos[photo.place_id].push(photo)
    });
    return filtered_photos;
}