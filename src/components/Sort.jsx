
import React from "react"
import { AppContext } from "../App";
function Sort() {
   const {onSortActive,sortActive} = React.useContext(AppContext) 
   const sortItems = [
      {'name':'популярности','sortProperty':'rating'}, 
      {'name' : 'по цене','sortProperty':'price'},
      {'name':'по алфавиту','sortProperty':'name'}];
 
   const [openList, setOpenList] = React.useState(false);

   const onOpenList = (i) => {
      // onSortActive(i)
      setOpenList(!openList);
     
   }
   // setOpenList(false);


   return (
      <div className="row-category__sort">
         <div className="row-category__btns" onClick={onOpenList}>
            Сортировка по: <span>{sortActive.name}</span>
         </div>
         {
            openList &&
            <ul className="row-category__list">
               {
                  sortItems.map((obj, i) =>
                     <li className={sortActive.name === obj.name ? 'row-category__btn _active' : 'row-category__btn'} key={i}>
                        <button
                           onClick={() => onSortActive(obj,setOpenList(false))}
                        >{obj.name}</button></li>
                  )
               }

            </ul>


         }

      </div>
   )
}

export default Sort