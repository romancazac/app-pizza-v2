import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './style.css';

import Header from './components/Header';
import Home from './pages/Home';
import Basket from './pages/Basket';

export const AppContext = React.createContext();

function App() {


  const [search, setSearch] = React.useState('');

  const [products, setProducts] = React.useState([]);
  const [loaded, setLoaded] = React.useState(true);

  const [paginationPage, setPaginationPage] = React.useState(1);
  console.log(paginationPage)

  const [categoryActive, setCategoryActive] = React.useState(0);
  const [sortActive, setSortActive] = React.useState({ 'name': 'популярности', 'sortProperty': 'rating' });
  const onSetCategory = (item) => {
    setCategoryActive(item)
  }
  const onSetSortActive = (obj) => {
    setSortActive(obj);

  }


  React.useEffect(() => {
    const category = `${categoryActive > 0 ? `&category=${categoryActive}` : ''}`;
    const sort = `&_sort=${sortActive.sortProperty}&_order=desc`;
    const searchProduct = `&q=${search}`;
    const page =`&_page=${paginationPage}&_limit=4`
    setLoaded(true);
    axios.get(`http://localhost:3001/pizzas?${page}${category}${sort}${searchProduct}`)
      .then(function (data) {

        setProducts(data.data);
        setLoaded(false);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [categoryActive, sortActive, search, paginationPage]);

  const onPaginationPage = (number) => setPaginationPage(number);
  const onCategory =(index) => onSetCategory(index);
  const  onSortActive=(obj) => onSetSortActive(obj);
  return (
    
    <div className="App">
      <AppContext.Provider value={{search, setSearch, onPaginationPage, onCategory, categoryActive, onSortActive,sortActive}}>    
      <div className="wrapper">
        <Header  />
        <main className="page">
          <Routes>
            <Route path="/" element={<Home
              loaded={loaded}
              products={products}    
              search={search}
               
            />} />
            <Route path="basket" element={<Basket />} />
          </Routes>

        </main>

      </div>
      </AppContext.Provider>    
    </div>
  );
}

export default App;
