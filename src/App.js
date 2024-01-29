import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Films from './Components/Films.js';
import Collections from './Components/Collections.js';
import Genres_Countries from './Components/Genres_Countries.js';
import { useState } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='mobile-menu-button' onClick={toggleMobileMenu}>
          ☰
        </div>
        <ul className={`nav-list ${isMobile? 'mobile': ''}`}>
          <li><Link className='link' to='films'>Фильмы</Link></li>
          <li><Link className='link' to='collections'>Коллекции</Link></li>
          <li><Link className='link' to='genres'>Жанры</Link></li>
          <li><Link className='link' to='countries'>Страны</Link></li>
        </ul>
      </nav>
      <div className='routes-container'> 
        <Routes>
          <Route path='/'element={<div>Добро пожаловать! Воспользуйтесь навигационным меню.</div>} />
          <Route path='films/'element={<Films/>} />
          <Route path='collections/' element={<Collections/>}/>
          <Route path='genres' element={<Genres_Countries par1={'genres'} par2={'genre'}/>}/>
          <Route path='countries' element={<Genres_Countries par1={'countries'} par2={'country'}/>}/>
          <Route path='*' element={<div>Упс...страница не найдена</div>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
