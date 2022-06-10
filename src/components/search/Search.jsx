import debounce from 'lodash.debounce';
import React from 'react';
import { AppContext } from '../../App';

import './search.scss';
const Search = () => {
   const {search, setSearch} = React.useContext(AppContext);
   const [value, setValue] = React.useState('');
   const updateSearch = React.useCallback(
      debounce((value) => {
         setSearch(value);
   }, 1000)
   
   );
   const searchProduct = (e) => {
      setValue(e.target.value);
      updateSearch(e.target.value)
   }
   

   return (
      <div className='search'>
         <input
            className='search__inp'
            type="search"
            placeholder='поиск пиццы...' 
            value={value}
            onChange={searchProduct}
            />
         <button className="search__icon" ></button>
      </div>

   )
}

export default Search