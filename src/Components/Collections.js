/**
 * Компонент для отображения коллекций, имеющихся на сервере,
 * в селекте располагаются возможные варианты
 * @return {Component} Collections - список соответствующих позиций, разделенный постранично
 */

import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
import ItemCard from "./ItemCard.js";
import Pagination from "./Pagination.js";

const Collections = () => {
    const [collection, setCollection] = useState(null);
    const [option, setOption] = useState('TOP_POPULAR_ALL');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(35)
    const [url, setUrl] = useState('');
    const [data, isLoading, error] = useFetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': process.env.REACT_APP_API_KEY,
        },
    });

    const handleChange = (event) => {
        setOption(event.target.value);
        setPage(1);
    };

    const handleNextPage = () => {
        if (page < totalPages) {
          setPage(page + 1);
        };
    };

    const handlePrevPage = () => {
        if (page > 1) {
          setPage(page - 1);
        };
    };

    useEffect(() => {
        setCollection(null);
        setUrl(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=${option}&page=${page}`);
        if(data) {
            setCollection(data['items']);
            setTotalPages(data['totalPages']);
        };    
    }, [option, page, url, data, totalPages]);
    
    return <div className="collection">
        <div className="select-container">
            <label htmlFor="select">Выберите коллекцию: </label>
            <select id='select' value={option} onChange={handleChange}>
                <option value="TOP_POPULAR_ALL">TOP_POPULAR_ALL</option>
                <option value="TOP_POPULAR_MOVIES">TOP_POPULAR_MOVIES</option>
                <option value="TOP_250_TV_SHOWS">TOP_250_TV_SHOWS</option>
                <option value="TOP_250_MOVIES">TOP_250_MOVIES</option>
                <option value="VAMPIRE_THEME">VAMPIRE_THEME</option>
                <option value="COMICS_THEME">COMICS_THEME</option>
                <option value="FAMILY">FAMILY</option>
                <option value="OSKAR_WINNERS_2021">OSKAR_WINNERS_2021</option>
                <option value="LOVE_THEME">LOVE_THEME</option>
                <option value="ZOMBIE_THEME">ZOMBIE_THEME</option>
                <option value="CATASTROPHE_THEME">CATASTROPHE_THEME</option>
                <option value="KIDS_ANIMATION_THEME">KIDS_ANIMATION_THEME</option>
            </select>
        </div>
        {data ? <Pagination 
                    totalPages={totalPages} 
                    page={page} 
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}/>: null}
        <div>{isLoading && 'Подождите...'}</div>
        <div>{error && url && `${error}`}</div>
        {collection && <ul className="collection-list">
            {collection.map(item => {
                return <li key={item.kinopoiskId}><ItemCard itemInfo={item}/></li>
            })}
        </ul>}
        {data ? <Pagination 
                    totalPages={totalPages} 
                    page={page} 
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}/>: null}
    </div>
}

export default Collections;
