import axios from "axios";

export const useAxios = () => {
    return axios.create({
        baseURL: import.meta.env.VITE_API,  // Environment variable for API base URL
        headers: {
            'Content-Type': 'application/json',  // Example of a common header
        }
    });
};
