import { useState } from 'react';

import axios, { AxiosError, AxiosRequestConfig } from 'axios';

type MakeRequestReturnType<T> = {
    data: T | null;
    error: string | undefined;
};

const useAxios = <T>() => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const request: (config?: AxiosRequestConfig) => Promise<MakeRequestReturnType<T>> = async (
        config = { method: 'get' }
    ) => {
        try {
            setIsLoading(true);
            const response = await axios(config);

            return {
                data: response.data as T,
                error: '',
            };
        } catch (error) {
            const axiosError = error as AxiosError<{ message: string }>;
            return {
                data: null,
                error: axiosError.response?.data?.message,
            };
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, request };
};

export default useAxios;
