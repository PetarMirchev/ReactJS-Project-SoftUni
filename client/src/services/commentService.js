import * as requestLibMyAxios from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';


export const create = async (productId, text, img) => {
    const newComment = await requestLibMyAxios.post(baseUrl, {
        productId,
        text,
        img,
    });

    return newComment;
}


export const getAll = async (productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await requestLibMyAxios.get(`${baseUrl}?${query}`);

    //console.log(result);
    return result;
}