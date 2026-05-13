import React from 'react'

export default function Cart({ cart, isOpen, onClose, onRemove, onChangeQty }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose} />}
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-head">
          <h3>Your Order</h3>
          <button onClick={onClose}>✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>🍽️</p>
            <p>Your cart is empty</p>
            <p>Add dishes from the menu!</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <div className="item-info">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">${(item.price * item.qty).toFixed(2)}</p>
                  </div>
                  <div className="qty-ctrl">
                    <button onClick={() => onChangeQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onChangeQty(item.id, +1)}>+</button>
                  </div>
                  <button className="rm-btn" onClick={() => onRemove(item.id)}>🗑️</button>
                </div>
              ))}
            </div>
            <div className="cart-foot">
              <div className="cart-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="btn-gold w-full">Confirm Order</button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
