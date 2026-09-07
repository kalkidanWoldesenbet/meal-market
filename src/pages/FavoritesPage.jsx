import FavoriteMeal from "../components/FavoriteMeal"

function FavoritesPage({
  favorites,
  onRemove,
  onAddToCart
}) {
  return (
    <main>
      <h1>❤️ My Favorites</h1>

        {favorites.length === 0 ? (
          <p>You haven't added any favorites yet.</p>
        ) : (
          <div className="meal-grid">
            {favorites.map((meal) => (
              <FavoriteMeal
                key={meal.idMeal}
                meal={meal}
                onRemove={onRemove}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
    </main>
  )
}

export default FavoritesPage
