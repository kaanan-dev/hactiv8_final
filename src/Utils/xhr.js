import axios from "axios";
import {ErrorAction} from "./Error";

export const post = async (url, data) => {
    try {
        let response = await axios.post(url, data);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        ErrorAction.setError(error);
    }
   
};
export const get = async (url) => {
    try {
        let response = await axios.get(url);
    if (response.status === 200) {
        return response.data;
        }
    } catch (error) {
        ErrorAction.setError(error);
    }
};
