export const createPhotoForPlace = (photo) => (
    $.ajax({
        url: `api/photos`,
        method: 'POST',
        data: { photo }
    })
);