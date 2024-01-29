/**
 * Компонент-карточка для отображения данных по фильму/сериалу
 * @param {object} movieInfo - массив данных по 1 позиции
 * @return {Component} MovieCard - карточка
 */

const MovieCard = ({ movieInfo }) => {
    return <div className="movie-card">
        <h3>
            <div>
                Ru: {movieInfo['nameRu'] ? movieInfo['nameRu']: '-'}
            </div>
            <div>
                En: {movieInfo['nameEn'] ? movieInfo['nameEn']: '-'}
            </div>
        </h3>
        <p>Год выпуска: {movieInfo['year']}</p>
        <p>Жанры: {movieInfo['genres'].map(e => e['genre']).join(', ')}</p>
        <p>{movieInfo['description']}</p>
    </div>
};

export default MovieCard;
