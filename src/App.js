import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './style.css';

import Header from './components/Header';
import Home from './pages/Home';
import Basket from './pages/Basket';



function App() {

  const [search, setSearch] = React.useState('');

  const [products, setProducts] = React.useState([]);
  const [loaded, setLoaded] = React.useState(true);

  const [paginationPage, setPaginationPage] = React.useState(1);
  console.log(paginationPage)

  const [categoryActive, setCategoryActive] = React.useState(0);
  const [sortActive, setSortActive] = React.useState({ 'name': 'популярности', 'sortProperty': 'rating' });
  const onCategory = (item) => {
    setCategoryActive(item)
  }
  const onSortActive = (obj) => {
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

  return (

    <div className="App">

      <div className="wrapper">
        <Header search={search} setSearch={setSearch} />
        <main className="page">
          <Routes>
            <Route path="/" element={<Home
              loaded={loaded}
              products={products}
              onCategory={(index) => onCategory(index)}
              categoryActive={categoryActive}
              onSortActive={(obj) => onSortActive(obj)}
              sortActive={sortActive}
              search={search}
              onPaginationPage={(number) => setPaginationPage(number) }
            />} />
            <Route path="basket" element={<Basket />} />
          </Routes>

        </main>

      </div>

    </div>
  );
}

export default App;
