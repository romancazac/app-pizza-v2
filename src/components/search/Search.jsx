import React from 'react';
import './search.scss';
const Search = ({ search, setSearch }) => {
  
   return (
      <div className='search'>
         <input
            className='search__inp'
            type="text"
            placeholder='поиск пиццы...' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
         <button className="search__icon"></button>
      </div>

   )
}

export default Search