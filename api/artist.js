import { get, getWithParams } from './request';
export const getPageByArtistName = (data) => {
    return getWithParams(`/artist/page`, data);
};
export const getArtistById = (id) => {
    return get(`/artist/${id}`);
};
