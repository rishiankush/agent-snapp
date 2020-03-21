import axios from 'axios';

class Service {
    constructor(baseUrl = "http://localhost:3300") {
        let service = axios.create({
            baseURL: baseUrl,
        });

        service.interceptors.response.use(this.handleSuccess);
        this.service = service;
    }

    handleSuccess(response) {
        console.log('Success response **** ', response);
        return response;
    }

    get = async (path) => {
        const result = await this.service(path);
        return result
    }

    put = async (path, payload) => {
        const result = await this.service.request({
            method: 'PUT',
            url: path,
            responseType: 'json',
            data: payload
        });
        return result;
    }
    
    post = async (path, payload) => {
        const result = await this.service.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            data: payload
        });
        return result;
    }
}