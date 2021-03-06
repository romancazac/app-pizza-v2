import React from 'react';

import Category from '../components/Category';
import Sort from '../components/Sort';
import Product from '../components/Product';
import TitleBlock from '../components/TitleBlock';
import Loader from '../components/Loader';
import Pagination from '../components/pagination/Pagination';
import { useSelector } from 'react-redux';
function Home({loaded}) {

   const {pizza,status}= useSelector(state => state.pizza);
   console.log(status)
   return (
      <section className="products">
         <div className="products__container">
            <div className="products__category row-category">
               <Category />
               <Sort />
            </div>
            <div className="products__product product">
               <TitleBlock title='Все пиццы' />
               <div className="product__row">
                  {
                     status === 'loading'
                        ?
                        [...new Array(6)].map((_, i) => <Loader key={i} />)
                       
                        :
                        //search local
                        // products.filter((obj) => {
                        //    if(obj.name.toLowerCase().includes(search.toLowerCase())){
                        //       return true;
                        //    }
                        //    return false
                        // }).
                        // map((items) => <Product  {...items} key={items.id} />)

                        pizza.map((items) =>  <Product  {...items} key={items.id} />)

                         
                  }

               </div>
               <Pagination />
            </div>
         </div>
      </section>
   )
}

export default Home