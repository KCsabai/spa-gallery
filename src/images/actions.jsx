export const FETCH_TYPES = {
    FETCH_IMAGE_LIST: 'FETCH_IMAGE_LIST',
    FETCH_IMAGE: 'FETCH_IMAGE',
    FETCH_IMAGE_UPDATE: 'FETCH_IMAGE_UPDATE',
    FETCH_IMAGE_DELETE: 'FETCH_IMAGE_DELETE',
    FETCH_IMAGE_UPLOAD: 'FETCH_IMAGE_UPLOAD',
}

export const IMAGE_ACTIONS = {
    SELECT_IMAGE: 'SELECT_IMAGE',
    UPDATE_SELECTED: 'UPDATE_SELECTED',
};

export const imagesUpload = (data) => ({
    type: FETCH_TYPES.FETCH_IMAGE_UPLOAD,
    method: 'POST',
    url: `/images`,
    data,
});

export const fetchImages = () => ({
    type: FETCH_TYPES.FETCH_IMAGE_LIST,
    method: 'GET',
    url: '/images',
});

export const fetchImage = (id) => ({
    type: FETCH_TYPES.FETCH_IMAGE,
    method: 'GET',
    url: `/images/${id}`,
});

export const selectImage = (imageId) => ({
    type: IMAGE_ACTIONS.SELECT_IMAGE,
    data: imageId,
});

export const updateSelected = (data) => ({
    type: IMAGE_ACTIONS.UPDATE_SELECTED,
    data,
});

export const imageUpdate = (imageId, data) => ({
    type: FETCH_TYPES.FETCH_IMAGE_UPDATE,
    method: 'PATCH',
    url: `/images/${imageId}`,
    data,
});

export const imageDelete = (data) => ({
    type: FETCH_TYPES.FETCH_IMAGE_DELETE,
    method: 'DELETE',
    url: `/images/${data.id}`,
    data,
});