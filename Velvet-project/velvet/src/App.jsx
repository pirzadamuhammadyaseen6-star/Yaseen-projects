import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Velvet from './components/Velvet.jsx'
import Cart from './components/Cart.jsx'

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  function addToCart(dish) {
    setCart(prev => {
      const found = prev.find(i => i.id === dish.id)
      if (found) return prev.map(i => i.id === dish.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...dish, qty: 1 }]
    })
    setCartOpen(true)
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  function changeQty(id, delta) {
    setCart(prev =>
      prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    )
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <>
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Velvet onAddToCart={addToCart} />
      <Cart
        cart={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onChangeQty={changeQty}
      />
    </>
  )
}
