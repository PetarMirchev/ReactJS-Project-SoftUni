import * as requestLibMyAxios from '../lib/request';

const baseUrl = 'http://localhost:3030/data/products';


//!custom request logic similar AXIOS lib calls
export const getAllData = async () =>{
    const result = await requestLibMyAxios.get(baseUrl);

    return Object.values(result);
};


export const getOne = async (elementId) =>{
    const result = await requestLibMyAxios.get(`${baseUrl}/${elementId}`);

    return result;
};

//! last 4 created items
export const getLatest = async () => {
    const query = new URLSearchParams({
        offset: -4,
        pageSize: 4,
    });

    const result = await requestLibMyAxios.get(`${baseUrl}?${query}`);
    
    return result;
};

//*************************************************************************************************** */


// CRUD
export const create = async (elementData) =>{
    const result = await requestLibMyAxios.post(baseUrl, elementData);

    return result; 
};


export const edit = async (elementId, elementData) => {
    const result = await requestLibMyAxios.put(`${baseUrl}/${elementId}`, elementData);

    return result; 
};


export const remove = async (elementId) =>  requestLibMyAxios.remove(`${baseUrl}/${elementId}`);