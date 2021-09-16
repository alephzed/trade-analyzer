
let baseURL: string = window.location.protocol + '//' + window.location.host;

let apiBase: string = baseURL + '/api/';

export const Resources = {
    URL: {
        apiBase: apiBase
    },
    REQUEST: {
        contentTypeFormUrlEncoded: 'application/x-www-form-urlencoded; charset=utf-8',
        contentTypeJSON: 'application/json',
        contentTypeOctetStream: 'application/octet-stream',
        methods: {
            GET: 'get',
            POST: 'post',
            PUT: 'put',
            DELETE: 'delete'
        },
        headers: {
            AUTHORIZATION: 'Authorization',
            ACCEPT: 'Accept',
            CONTENT_TYPE: 'Content-Type'
        }
    },
    CACHES: {
       currentUser: 'currentUser',
       mockServices: 'mockServices'
    }
};
