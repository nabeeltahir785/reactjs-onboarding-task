import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: "json",
    validateStatus: (status: number) => status >= 200 && status < 399,
    headers: {
        "Content-type": "application/json",
        locale: "en",
        "secret-key": process.env.REACT_APP_SECRET_KEY,
        "client-id": process.env.REACT_APP_CLIENT_ID,
        "access-token": localStorage.getItem("accessToken"),
    },
});
