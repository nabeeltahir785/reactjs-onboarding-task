import { axiosInstance } from "./axiosInstance";
import { AxiosResponse } from "axios";

type axiosMethodTypes = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

const apiManager = {
    request: async (
        url: string,
        body: unknown,
        method: axiosMethodTypes,
        baseURL = ""
    ): Promise<AxiosResponse | never> => {
        try {
            return axiosInstance({
                method: method,
                url: baseURL + url,
                data: body,
            });
        } catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            } else {
                throw new Error("An Error Occurred");
            }
        }
    },
};
export default apiManager;
