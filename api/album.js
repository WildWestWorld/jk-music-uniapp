import { get, getWithParams } from './request';
export const getAlbum = (id) => {
    return get(`/album/${id}`);
};

export const getPageByAlbumName = (data) => {
    return getWithParams(`/album/page`, data);
};
