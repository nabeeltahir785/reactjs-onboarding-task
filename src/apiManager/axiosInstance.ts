import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: "json",
    validateStatus: (status: number) => status >= 200 && status < 399,
    headers: {
        "Content-type": "application/json",
        locale: "en",
        "access-token": localStorage.getItem("accessToken"),
    },
});
