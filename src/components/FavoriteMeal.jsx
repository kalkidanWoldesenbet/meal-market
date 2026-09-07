import React from 'react'

function FavoriteMeal({ meal, onRemove, onAddToCart}) {
  return (
    
    <div className='favorite-meal'>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="favorite-image"
      />

      <div className="favorite-info">
        <span>{meal.strCategory}</span>

        <h3>{meal.strMeal}</h3>

        <p>
          {meal.strArea ? `${meal.strArea} cuisine` : "Cuisine not specified"}
        </p>

        <div className="favorite-actions">
          <button onClick={() => onAddToCart(meal)}>
            🛒 Add to Cart
          </button>

          <button onClick={() => onRemove(meal)}>
            💔 Remove
          </button>
        </div>
      </div>
    </div>
   
  )
}

export default FavoriteMeal
