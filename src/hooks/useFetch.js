/**
 * Кастомный хук для подгрузки данных с сервера
 * @param {string} url - адрес запроса
 * @param {object} params - массив из параметров запроса
 * @return {hook} useFetch - возвращает массив из:
 *                                               @data - данных
 *                                               @isLoading - состояния загрузки
 *                                               @error - текст ошибки
 */

import { useState, useEffect } from "react";

const useFetch = (url, params) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        setIsLoading(true);
        setData(null);
        setError(null);
        fetch(url, params)
            .then((res) => {
                if(!res.ok) {
                    throw new Error('Request failed! Status: ' + res.status);
                }
                return res.json();
            })
            .then((respData) => {
                if (!cancelled) setData(respData);
            })
            .catch((e) => {
                if (!cancelled) setError(e);
            })
            .finally(() => {
                if (!cancelled) setIsLoading(false);
            });
            
        return () => {
            cancelled = true;
        };
    }, [url, params]);

    return [data, isLoading, error];
};

export default useFetch;
