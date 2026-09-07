import CartItem from "../components/CartItem";

function CartPage({
  cart,
  cartTotal,
  onIncrease,
  onDecrease,
  onRemove
}) {
  return (
    <main>
      <h2>🛒 My Cart</h2>
         <div className="cart-list">
           {cart.length === 0 ? (
             <p>Your cart is empty</p>
           ): cart.map((item)=>(
               <CartItem
                 key={item.meal.idMeal}
                 item={item}
                 onIncrease={onIncrease}
                 onDecrease={onDecrease}
                 onRemove={onRemove}
               />
             ))}
         </div>
          <div className="cart-total">
            <span>Total</span>
            <strong>{cartTotal} ETB</strong>
          </div>    
      </main>
  )
}

export default CartPage
