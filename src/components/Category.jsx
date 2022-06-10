import React, { useContext } from "react"
import { AppContext } from "../App"

function Category() {

   const {onCategory, categoryId} = useContext(AppContext)
   const category = [
      'Все',
      'Мясные',
      'Вегетарианская',
      'Гриль',
      'Острые',
      'Закрытые'
   ]
  
   return (
      <div className="row-category__items">
         {
            category.map((item, index) =>
               <button className={categoryId === index ? 'row-category__item _active' : 'row-category__item '}
                  key={index}
                  onClick={() => onCategory(index)}>
                  {item}</button>

            )

         }
      </div>
   )
}

export default Category