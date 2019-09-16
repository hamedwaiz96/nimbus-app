export const fetchAllPlaces = (filter) => (
    $.ajax({
        url: 'api/places',
        method: 'GET',
        data: {filter}
    })
);

export const fetchPlace = (id) => (
    $.ajax({
        url: `api/places/${id}`,
        method: 'GET'
    })
);

export const createPlace = (place) => (
    $.ajax({
        url: 'api/places',
        method: 'POST',
        data: {place}
    })
)