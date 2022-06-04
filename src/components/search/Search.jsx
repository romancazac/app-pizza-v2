import React from 'react';
import { AppContext } from '../../App';

import './search.scss';
const Search = () => {
   const {search, setSearch} = React.useContext(AppContext)
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