import React from "react"

function Category({onCategory,categoryActive}) {
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
               <button className={ categoryActive === index ? 'row-category__item _active' : 'row-category__item '}
                  key={index}
                  onClick={() => onCategory(index)}>
                  {item}</button>

            )

         }
      </div>
   )
}

export default Category