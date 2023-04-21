import React, {useState, useEffect} from "react";

function Item({ name, category }) {
  // create usState accepting a boolean
  const [isAdded, setIsAdded] = useState(false)

  const cartValue = isAdded ? 'in-cart' : ''
  const buttonClass = isAdded ? "remove" : "add";
  const buttonName = isAdded ? "Remove From Cart" : "Add to Cart";
  
  function addToCart(){
    setIsAdded(!isAdded)
  }

  return (
    <li className={cartValue}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={addToCart}>{buttonName}</button>
    </li>
  );
}

export default Item;
