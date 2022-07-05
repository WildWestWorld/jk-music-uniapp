import { get, getWithParams } from './request';
export const getPlayListById = (id) => {
    return get(`/playlist/${id}`);
};

export const getPageByPlayListName = (data) => {
    return getWithParams(`/playlist/page`, data);
};
