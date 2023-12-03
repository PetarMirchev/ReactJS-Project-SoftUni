
//!custom helper logic for creating requests for server (simulates similar interface as AXIOS in use .get(...))
const buildOptions = (data) => { // support build request body & headers
    const options = {};

    if(data) {
        options.headers = {
            'content-type': 'application/json'
        };
        options.body = JSON.stringify(data);
    }

    const token = localStorage.getItem('accessToken');

    if(token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        };
    }

    return options;
};

const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method, // 'GET', 'POST'....
    });

    //if no content (204)
    if (response.status === 204) {
        return {};
    }

    const result = await response.json();


    if (!response.ok){
        throw result;
    }

    return result;
};

export const get = request.bind( null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');
