export const fetchUser = (id) => (
    $.ajax({
        url: `api/users/${id}`,
        method: 'GET'
    })
);

export const updateUser = (id, photo) => (
    $.ajax({
        url: `api/users/${id}`,
        method: 'PATCH',
        data: {photo}
    })
);