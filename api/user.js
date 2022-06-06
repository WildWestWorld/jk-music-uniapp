import { post } from './request';

export const login = (loginReques) => {
    return post('/tokens', loginReques);
};
export const register = (user) => {
    return post('/users', user);
};
