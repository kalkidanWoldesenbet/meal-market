import React from 'react'

function MealCard({meal, onFavorite, onRemove,onAddToCart, isFavorite}) {
  return (
    <article className='meal-card'>
        <img 
            src={meal.strMealThumb} 
            alt={meal.strMeal} 
            className='meal-image'
        />
        
        <div className="meal-info">
            <span className='meal-category'>
                {meal.strCategory}
            </span>
           
            <h2>{meal.strMeal}</h2>
            <p>
                {meal.strArea ? `${meal.strArea} cuisine` : "Cuisine not specified"}
            </p>
            <button onClick={()=>
              isFavorite
                ?onRemove(meal)
                :onFavorite(meal)}>
                {isFavorite ? "💔 Remove Favorite" : "❤️ Favorite"}
            </button>
            <button onClick={()=> onAddToCart(meal)}>
                🛒 Add to Cart
            </button>
        </div>
    </article>
    
  )
}

export default MealCard
