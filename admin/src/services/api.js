import axios from "axios";
export const baseUrl = 'http://localhost:3000';

const defaultHeader = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'content-Type': 'multipart/form-data'
};
const defaultParameter = {}

export const getMethod = async (url, params, header) => {
    try {
        const response = await axios({
            method: "get",
            url: baseUrl + url,
            params: defaultParameter.push(params),
            header: defaultHeader.push(header)
        });
        return response;
    } catch (err) {
        return err;
    }
}

export const postMethod = async (url, requestData, params, header) => {
    try {
        const response = await axios({
            method: "post",
            data: requestData,
            url: baseUrl + url,
            params: defaultParameter.push(params),
            header: defaultHeader.push(header)
        });
        return response;
    } catch (err) {
        return err;
    }
}

export const putMethod = async (url, requestData, params, header) => {
    try {
        const response = await axios({
            method: "put",
            data: requestData,
            url: baseUrl + url,
            params: defaultParameter.push(params),
            header: defaultHeader.push(header)
        });
        return response;
    } catch (err) {
        return err;
    }
};

export const deleteMethod = async (url, params, header) => {
    try {
        const response = await axios({
            method: "delete",
            url: baseUrl + url,
            params: defaultParameter.push(params),
            header: defaultHeader.push(header)
        });
        return response;
    } catch (err) {
        return err;
    }
};
