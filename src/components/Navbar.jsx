import { NavLink } from "react-router-dom"

function Navbar({favoriteCount, cartCount}) {
  return (
    <nav className="nav-bar">
        <NavLink to="/" end className="navbar-logo">
            🍴 MealMarket
        </NavLink>

        <div className="nav-links">
            <NavLink to="/" 
                end 
                className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"}>
                Home
            </NavLink>
            <NavLink
                to="/favorites"
                end
                className={({isActive}) => 
                    isActive ? "nav-link active" : "nav-link"}>
                ❤️ Favorites ({favoriteCount})
            </NavLink>
            <NavLink
                to="/cart"
                end
                className={({isActive}) => 
                    isActive ? "nav-link active" : "nav-link"}>
                🛒 Cart ({cartCount})
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar;
