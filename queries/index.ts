import axios from "axios";

export const url = 'https://turismodentaleal.com'
export const apiUrl = `${url}/api/`


export const instance = axios.create({
    baseURL: apiUrl
});