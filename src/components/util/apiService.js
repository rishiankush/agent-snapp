import axios from 'axios';
import toaster from './toaster';

class APIService {
    constructor(baseUrl = "http://localhost:3300") {
        let service = axios.create({
            baseURL: baseUrl,
        });

        service.interceptors.response.use(this.handleSuccess, this.responseInteptor);
        this.service = service;
    }

    handleSuccess = (response) => {
        console.log('Success response **** ', response);
        return response;
    }

    responseInteptor = (error) => {
        if (error.response.status === 401) {
            window.location = '/login';
            toaster.warn("Your session has expired. Please login again to contain.");
        } else if(error.response.status === 409) {
            const { data } = error.response;
            if (data && data.err) {
                const { errors } = data;
                if (errors && Array.isArray(errors)) {
                    errors.forEach(({msg}) => toaster.warn(msg))
                }
            }
            return Promise.reject(error);
        } else {
            return Promise.reject(error);
        }
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

    facebookLogin = async ({facebookId}) => {
        const path = 'user/facebookLogin';
        const payload = {facebookId};
        try {
            const result = this.put(path, payload);
            return result;
        } catch (err) {
            console.log(err);
        }
    }


}

const apiService = new APIService();

export default apiService;