import { get, getWithParams } from './request';
export const getAlbumById = (id) => {
    return get(`/album/${id}`);
};

export const getPageByAlbumName = (data) => {
    return getWithParams(`/album/page`, data);
};
