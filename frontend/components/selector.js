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
    let new_users = {};
    for(var i = 0; i <= filtered_reviews.length - 1; i++){
        author_ids.push(filtered_reviews[i].author_id)
    }
    for(var j in users){
        if (author_ids.includes(users[j].id)){
            new_users[users[j].id] = users[j]
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

export const getReviewsObject = (reviews, places) => {
    let filtered_reviews = {};
    for (var i = 0; i <= places.length - 1; i++) {
        filtered_reviews[places[i].id] = []
    }
    for (var j = 0; j <= reviews.length - 1; j++) {
        filtered_reviews[reviews[j].place_id].push(reviews[j])
    }
    return filtered_reviews;
}

export const getPlacesForUser = (places, filtered_reviews, filtered_photos) => {
    let place_ids = [];
    let new_places = [];
    for (var i = 0; i <= filtered_reviews.length - 1; i++) {
        place_ids.push(filtered_reviews[i].place_id)
    }
    for (var k = 0; k <= filtered_photos.length - 1; k++){
        if (!(place_ids.includes(filtered_photos[k].place_id))){
            place_ids.push(filtered_photos[k].place_id)
        }
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
        if (photos[i].user_id === id) {
            new_photos.push(photos[i])
        }
    }
    return new_photos;
}

export const getPhotosObject = (photos, places) => {
    let filtered_photos = {};
    for (var i = 0; i <= places.length - 1; i++) {
        filtered_photos[places[i].id] = []
    }
    for (var j = 0; j <= photos.length - 1; j++) {
        if(photos[j].place_id in filtered_photos){
            filtered_photos[photos[j].place_id].push(photos[j])
        }
    }
    return filtered_photos;
}