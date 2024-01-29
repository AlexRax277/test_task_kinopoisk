/**
 * Компонент для поиска данных на сервере по ключевому слову/словам
 * @return {Component} Films - список подходящих позиций
 */

import useFetch from "../hooks/useFetch.js";
import { useCallback, useEffect, useState } from "react";
import MovieCard from './MovieCard.js';

const Films = () => {
    const [films, setFilms] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [url, setUrl] = useState('');
    const [data, isLoading, error] = useFetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': process.env.REACT_APP_API_KEY,
        },
    });
    
    const handleInputChange = useCallback((event) => {
        setInputValue(event.target.value);
    }, []);

    const handleFormSubmit = (event) => {
        setInputValue('');
        event.preventDefault();
        const encodedReq = encodeURIComponent(inputValue);
        setUrl(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${encodedReq}`);
    };  

    useEffect(() => {
        if(data) {
            setFilms(data['films']);
        };    
    }, [data]);

    return <div>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="myInput">Поиск по ключевому слову: </label>
            <input
                type="text"
                className="input"
                id="myInput"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button type="submit">Отправить</button>
        </form>
        <div>{isLoading && 'Подождите...'}</div>
        <div>{error && url && `${error}`}</div>
        {films && <ul className="movies-list">
            {films.map(film => {
                return <li key={film.filmId}><MovieCard movieInfo={film}/></li>
            })}
        </ul>}
    </div>
}

export default Films;
