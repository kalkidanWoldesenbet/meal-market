import MealCard from "../components/MealCard"

function HomePage({
  meals,
  search, 
  setSearch,
  categories,
  category,
  setCategory,
  filteredMeals,
  addToFavorites,
  addToCart,
  loading,
  error
}) {
  return (
    <main> 
      <header className="header">
         <div className="search-container">
           <input
             type="text"
             placeholder="Search meals..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
           />
         </div>
      </header>
      <div className="category-buttons">
        {categories.map((categoryName)=>(
          <button 
            key={categoryName} 
            className={category === categoryName ?"active":""}
            onClick={()=>setCategory(categoryName)}>
              {categoryName}
          </button>
        
        ))}
      </div>
      <div className="section-heading">
        <h2>Explore Meals</h2>
        <p>{filteredMeals.length} meals found</p>
      </div>

      {loading && <p className="status-message">Loading meals...</p>}
      {error && <p className="status-message">{error}</p> }

      { !loading && !error && filteredMeals.length === 0?(
        <p className="status-message">No meals found</p>
      ):(
      <div className='meal-grid'>
        {filteredMeals.map((meal)=>(
          <MealCard 
            key={meal.idMeal} 
            meal={meal}
            onFavorite={addToFavorites}
            onAddToCart={addToCart}
            isFavorite={false}
          />
        ))}

      </div>
    )}
    </main>
  )
}

export default HomePage
