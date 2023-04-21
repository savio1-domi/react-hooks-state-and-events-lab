import React, {useState, useEffect} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const categories = items
  const list = categories.map(category => category.category)
  const categoryList = Array.from(new Set(list))

  const [selectedCategory, setSelectedCategory] = useState('')
  const [products, setProducts] =useState([])

  useEffect(() => {
    if(selectedCategory === ''){
      setProducts(categories)
      return
    }
    const filteredProducts = categories.filter(category => category.category === selectedCategory)
    setProducts(filteredProducts)
  }, [selectedCategory])

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(event)=> setSelectedCategory(event.target.value)}>
          <option value={''}>All Categories</option>
          {categoryList.map(category => {
            return (
              <option key={category} value={category}>{category}</option>
            )

          })}
          
        </select>
      </div>
      <ul className="Items">
        {products.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;