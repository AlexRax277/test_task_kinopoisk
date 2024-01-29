/**
 * Компонент для переключения страниц
 * @param {number} totalPages - общее количество страниц
 * @param {number} page - текущая страница
 * @param {function} handlePrevPage - функция-обработчик переключения на предыдущую страницу
 * @param {function} handleNextPage - функция-обработчик переключения на следующую страницу
 * @return {Component} Pagination - блок из 2-х кнопок
 */

const Pagination = ({ totalPages, page, handlePrevPage, handleNextPage }) => {
    return <div>
        {totalPages ? <div className="pagination">
            <button onClick={handlePrevPage} disabled={page <= 1}>
                Назад
            </button>
            <button onClick={handleNextPage} disabled={page >= totalPages}>
                Вперед
            </button>
        </div>: null}
    </div>
};

export default Pagination;
