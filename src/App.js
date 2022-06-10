import React from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setSortActive } from './redux/slices/filterSlices';
import { setPaginationPage } from './redux/slices/paginationSlice';
import './style.css';

import Header from './components/Header';
import Home from './pages/Home';
import Basket from './pages/Basket';
import { fetchPizzas } from './redux/slices/pizzaSlice';

export const AppContext = React.createContext();

function App() {

  const dispach = useDispatch();

  const { categoryId, sortActive } = useSelector(state => state.filter);
  const paginationPage = useSelector(state => state.pagination.paginationPage)

  const [search, setSearch] = React.useState('');


  const onSetCategory = (item) => {
    dispach(setCategoryId(item))
  }

  const onSetSortActive = (obj) => {

    dispach(setSortActive(obj))
  }

  const getPizzas = async () => {
    const category = `${categoryId > 0 ? `&category=${categoryId}` : ''}`;
    const sort = `&_sort=${sortActive.sortProperty}&_order=desc`;
    const searchProduct = `&q=${search}`;
    const page = `&_page=${paginationPage}&_limit=4`
    dispach(fetchPizzas({
      category,
      sort,
      searchProduct,
      page
    }))
    
  }


  React.useEffect(() => {
    // setLoaded(true);
    getPizzas()
  }, [categoryId, sortActive, search, paginationPage]);

  const onPaginationPage = (number) => dispach(setPaginationPage(number));
  const onCategory = (index) => onSetCategory(index);
  const onSortActive = (obj) => onSetSortActive(obj);
  return (

    <div className="App">
      <AppContext.Provider value={{ search, setSearch, onPaginationPage, onCategory, categoryId, onSortActive, sortActive }}>
        <div className="wrapper">
          <Header />
          <main className="page">
            <Routes>
              <Route path="/" element={<Home
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
