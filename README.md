# 🍴 MealMarket

MealMarket is a React-based meal discovery and ordering application built for **Assignment 2 – Create a React Data Driven App**.

The application uses the **TheMealDB API** to fetch meal data and allows users to search for meals, filter them by category, save favorites, and manage a shopping cart.

## 🚀 Features

* 🔎 **Meal Search**

  * Search for meals by name using TheMealDB API.

* 🗂️ **Category Filtering**

  * Filter meals by categories such as Beef, Chicken, Dessert, Pasta, Seafood, Vegetarian, and more.

* 🍽️ **Meal Cards**

  * Display meals in a responsive card-based layout.
  * Each card includes the meal image, name, category, and cuisine.

* ❤️ **Favorites**

  * Add meals to a favorites list.
  * Remove meals from favorites.
  * Favorites are saved using `localStorage`.

* 🛒 **Shopping Cart**

  * Add meals to the cart.
  * Increase or decrease item quantities.
  * Remove items from the cart.
  * Automatically calculate the cart total.
  * Cart data is saved using `localStorage`.

* 🧭 **Navigation**

  * React Router is used to navigate between:

    * Home
    * Favorites
    * Cart

* 📱 **Responsive Design**

  * The interface adapts to desktop, tablet, and mobile screen sizes.

* ⏳ **Loading & Error States**

  * Displays loading feedback while fetching data.
  * Handles API errors.
  * Displays an empty state when no meals are found.

## 🛠️ Technologies Used

* React
* Vite
* JavaScript (ES6+)
* React Router
* CSS
* TheMealDB API
* Browser LocalStorage
* Git & GitHub

## 🌐 API

Meal data is provided by **TheMealDB**.

The application uses the following endpoint:

```text
https://www.themealdb.com/api/json/v1/1/search.php?s=
```

TheMealDB provides free meal and recipe data that is used to populate the application.

## 📂 Project Structure

```text
meal-market/
├── src/
│   ├── components/
│   │   ├── CartItem.jsx
│   │   ├── FavoriteItem.jsx
│   │   ├── MealCard.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── FavoritesPage.jsx
│   │   └── CartPage.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd meal-market
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local address provided by Vite, usually:

```text
http://localhost:5173
```

## 📦 Available Scripts

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 💡 How It Works

### Fetching Meals

The application uses React's `useEffect` and the browser `fetch()` API to request meal data from TheMealDB.

```text
User searches
      ↓
Search state changes
      ↓
API request
      ↓
Meal data returned
      ↓
Meals displayed as cards
```

### Category Filtering

The fetched meals are filtered based on the selected category.

```text
All
├── Beef
├── Chicken
├── Dessert
├── Lamb
├── Pasta
├── Seafood
├── Side
└── Vegetarian
```

### Favorites

Favorite meals are stored in React state and synchronized with `localStorage`.

This means favorites remain available even after refreshing the browser.

### Cart

The cart stores:

* Meal information
* Quantity
* Price

Because TheMealDB does not provide meal prices, the application assigns prices based on meal categories for the ordering functionality.

The total is calculated using:

```text
Price × Quantity
```

for every item in the cart.

## 💰 Sample Pricing

The application uses category-based sample prices:

| Category   |   Price |
| ---------- | ------: |
| Beef       | 450 ETB |
| Chicken    | 350 ETB |
| Dessert    | 250 ETB |
| Lamb       | 500 ETB |
| Pasta      | 400 ETB |
| Seafood    | 550 ETB |
| Side       | 200 ETB |
| Vegetarian | 300 ETB |

These prices are for demonstration purposes only.

## 🧭 Application Routes

| Route        | Description                   |
| ------------ | ----------------------------- |
| `/`          | Browse and search meals       |
| `/favorites` | View saved favorite meals     |
| `/cart`      | View and manage shopping cart |

## 📋 Assignment Requirements

This project satisfies the main requirements of the React Data Driven App assignment:

* [x] React application
* [x] Free external API
* [x] API data fetching
* [x] Card-based data display
* [x] Category/related filtering
* [x] Search functionality
* [x] Favorite/cart functionality
* [x] Good CSS styling
* [x] Loading state
* [x] Error handling
* [x] Empty states
* [x] Responsive layout
* [x] Multi-page navigation with React Router
* [x] LocalStorage persistence

## 🎯 Learning Objectives

Through this project, the following React concepts were practiced:

* Components
* Props
* State management with `useState`
* Side effects with `useEffect`
* Rendering lists with `.map()`
* Conditional rendering
* Array methods such as `filter()`, `find()`, and `reduce()`
* Controlled inputs
* API requests using `fetch()`
* React Router
* Data-driven UI
* LocalStorage
* Reusable components
* Responsive CSS

## 🔮 Future Improvements

Possible improvements for future versions include:

* Individual meal detail pages
* Recipe instructions and ingredients
* More advanced filtering
* User authentication
* Real payment integration
* Checkout and delivery forms
* Backend integration
* Database storage
* User profiles
* Order history

## 👩‍💻 Author

**Kalkidan Woldesenbet**

Computer Science Graduate & Web Developer

---

Built with ❤️ using React and TheMealDB API.
