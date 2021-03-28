import axios from "axios";

export const post = async (url, data) => {
    let response = await axios.post(url, data);
    if(response.status == 200){
        return response.data;
    }
};
export const get = async (url) => {
    let response = await axios.get(url);
    if(response.status == 200){
        return response.data;
    }
};

