import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [meals,setMeals] = useState([]);
  const [search, setSearch] = useState("")
  const [category,setCategory] = useState("All")
  const [favorites, setFavorites] = useState(()=>{
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(()=> {
    async function fetchMeals() {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        if(!response.ok){
          throw new Error("Failed to fetch meals");
        }
        const data = await response.json();

        setMeals(data.meals || []);

      } catch (error) {
        setError("Something went wrong. Please try again.")
      } finally {
        setLoading(false);
      }
      
    }

    fetchMeals();
  }, [search])

  useEffect(()=> {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart]);

  const categories = [
    "All",
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Pasta",
    "Seafood",
    "Side",
    "Vegetarian"
  ];

  const filteredMeals =
    category ==="All"
      ? meals
      : meals.filter((meal) => meal.strCategory === category);

  function addToFavorites(meal){
    const alreadyFavorite = favorites.some((favorite) => favorite.idMeal === meal.idMeal);
    
    if (!alreadyFavorite){
      setFavorites([...favorites, meal]);
    }
    
  }

  function removeFromFavorites(meal){
    setFavorites(
      favorites.filter((favorite) => favorite.idMeal !==meal.idMeal)
    )
  }

  function getMealPrice(meal) {
    const prices = {
      Beef: 450,
      Chicken: 350,
      Dessert: 250,
      Lamb: 500,
      Pasta: 400,
      Seafood: 550,
      Side: 200,
      Vegetarian: 300,
    };

    return prices[meal.strCategory] || 350;
  }

  function addToCart(meal){
    const existingItem = cart.find(
      (item) => item.meal.idMeal === meal.idMeal
    );
    
    if(existingItem){
      const updatedCart = cart.map((item) =>
        item.meal.idMeal === meal.idMeal
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
    }else {
      setCart([
        ...cart,
        {
          meal: meal,
          quantity: 1,
          price: getMealPrice(meal)
        }
      ]);
    }
  }
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function increaseQuantity(mealId) {
    const updatedCart = cart.map((item) =>
      item.meal.idMeal === mealId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
  }


  function decreaseQuantity(mealId) {
    const updatedCart = cart
      .map((item) =>
        item.meal.idMeal === mealId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  }
  function removeFromCart(mealId) {
    const updatedCart = cart.filter(
      (item) => item.meal.idMeal !== mealId
    );

    setCart(updatedCart);
  }

  return (
    <div className="app">
      <Navbar
        favoriteCount={favorites.length}
        cartCount={cartCount}
      />

      <Routes>
      <Route 
        path="/" 
        element={
          <HomePage
            meals={meals}
            search={search}
            categories={categories}
            category={category}
            setCategory={setCategory}
            filteredMeals={filteredMeals}
            addToFavorites={addToFavorites}
            addToCart={addToCart}
            loading={loading}
            error={error} 
          />
        } 
      />
      <Route 
        path="/favorites" 
        element={
          <FavoritesPage
            favorites={favorites}
            onRemove={removeFromFavorites}
            onAddToCart={addToCart}
          />
        } 
      />
      <Route 
        path="/cart" 
        element={
          <CartPage
            cart={cart}
            cartTotal={cartTotal}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeFromCart}
          />
          } 
      />
    </Routes>
    </div>
  );  
  
}

export default App
