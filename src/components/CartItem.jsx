import React from 'react'

function CartItem({ item, onIncrease, onDecrease, onRemove}) {
  return (
    <div className='cart-item'>
      <img
        src={item.meal.strMealThumb}
        alt={item.meal.strMeal}
      />

      <div className="cart-item-info">
        <h3>{item.meal.strMeal}</h3>

        <p>{item.price} ETB</p>

        <div className="cart-controls">
          <button onClick={() => onDecrease(item.meal.idMeal)}>
            −
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => onIncrease(item.meal.idMeal)}>
            +
          </button>

          <button onClick={() => onRemove(item.meal.idMeal)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
