/**
 * Компонент для отображения данных по имеющимся жанрам и странам на сервере
 * @param {string} par1 - во мн. числе (genres или countries)
 * @param {string} par2 - в ед. числе (genre или country)
 * @return {Component} Genres_Countries - список жанров или стран
 */

import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.js";

const GenresCountries = ({ par1, par2 }) => {
    const [res, setRes] = useState(null);
    const [data, isLoading, error] = useFetch(
        'https://kinopoiskapiunofficial.tech/api/v2.2/films/filters',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': process.env.REACT_APP_API_KEY,
            },
        }
    );

    useEffect(() => {
        if (data) {
            setRes(data[par1].map(e => e[par2]).filter(el => el !== ''));
        };
    }, [data, par1, par2]);

    if (error) {
        return <p>Error: {error.message}</p>;
    };

    if (isLoading) {
        return <p>Загрузка...</p>;
    };
    if (res !== null) {
        return (
            <div>
                <div>Среди возможных {par1 === 'genres' ? 'жанров': 'стран производства'} фильмов вы можете найти:</div>
                <ul className="content">
                    {res.map(e => (
                        <div key={ res.indexOf(e) } className="card">{e}</div>
                    ))}
                </ul>
            </div>
        );
    } else {
        return null;
    }
    
};

export default GenresCountries;

