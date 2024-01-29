/**
 * Компонент-карточка для отображения данных по фильму/сериалу
 * @param {object} itemInfo - массив данных по 1 позиции
 * @return {Component} ItemCard - карточка
 */

import { v4 as uuidv4 } from 'uuid';

const ItemCard = ({ itemInfo }) => {
    return <div className="item-card">
        <h3>
            <div className='name'>{itemInfo['nameRu']}, {itemInfo['year']}</div>
            <div className="rating">{itemInfo['ratingKinopoisk']? itemInfo['ratingKinopoisk']: itemInfo['ratingImdb']}</div>
        </h3>
        <div className='item-info'>
            <div>
                <div className='type'>{itemInfo['type']}</div>
                <ul>Страны:
                    {itemInfo['countries'].map(country => {
                        return <li key={uuidv4()}>{country['country']}</li>
                    })}
                </ul>
                <ul>Жанры:
                    {itemInfo['genres'].map(genre => {
                        return <li key={uuidv4()}>{genre['genre']}</li>
                    })}
                </ul>
            </div>
            <img src={itemInfo['posterUrlPreview']} alt="Постер фильма"></img>
        </div>
    </div>
};

export default ItemCard;
