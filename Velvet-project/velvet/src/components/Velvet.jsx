import React, { useState, useEffect } from 'react'

// ── DATA ──────────────────────────────────────────────
const DISHES = [
  { id: 1, cat: 'Appetizers',   name: 'Crostini / Canapés',      price: 22.40, img: 'https://yaseen-velvet-table.netlify.app/images/image1.jpg',  desc: 'A delicious starter that teases your taste buds.' },
  { id: 2, cat: 'Appetizers',   name: 'Charcuterie Board',        price: 37.99, img: 'https://yaseen-velvet-table.netlify.app/images/image3.jpg',  desc: 'A light and flavorful bite to awaken your appetite.' },
  { id: 3, cat: 'Appetizers',   name: 'Cheese & Meat Platter',    price: 34.50, img: 'https://yaseen-velvet-table.netlify.app/images/image4.jpg',  desc: 'A perfectly crafted small dish that sparks appetite.' },
  { id: 4, cat: 'Appetizers',   name: 'Bruschetta',               price: 15.00, img: 'https://yaseen-velvet-table.netlify.app/images/image8.jpg',  desc: 'Crispy bread topped with fresh tomatoes and herbs.' },
  { id: 5, cat: 'Main Courses', name: 'Stir-Fried Noodles',       price: 17.99, img: 'https://yaseen-velvet-table.netlify.app/images/image14.jpg', desc: 'Flavorful noodles tossed with veggies and sauce.' },
  { id: 6, cat: 'Main Courses', name: 'Grilled Fish & Potatoes',  price: 24.99, img: 'https://yaseen-velvet-table.netlify.app/images/image15.jpg', desc: 'Freshly grilled fish with tender potatoes and herbs.' },
  { id: 7, cat: 'Main Courses', name: 'Lamb Chops with Sauce',    price: 30.00, img: 'https://yaseen-velvet-table.netlify.app/images/image16.jpg', desc: 'Juicy lamb chops paired with rich sauce.' },
  { id: 8, cat: 'Main Courses', name: 'Flatbread Pizza',          price: 27.50, img: 'https://yaseen-velvet-table.netlify.app/images/image13.jpg', desc: 'Thin crispy bread with flavorful toppings.' },
  { id: 9, cat: 'Desserts',     name: 'Artisan Ice Cream',        price: 22.99, img: 'https://yaseen-velvet-table.netlify.app/images/image24.jpg', desc: 'Assorted premium ice cream flavors.' },
  { id:10, cat: 'Desserts',     name: 'Berry Yogurt Parfait',     price: 26.35, img: 'https://yaseen-velvet-table.netlify.app/images/image27.jpg', desc: 'Layered parfait with berries and honey.' },
  { id:11, cat: 'Desserts',     name: 'Chocolate Waffle Gelato',  price: 21.50, img: 'https://yaseen-velvet-table.netlify.app/images/image26.jpg', desc: 'Rich gelato in a crisp waffle cone.' },
  { id:12, cat: 'Drinks',       name: 'Classic Fruit Mocktail',   price: 22.99, img: 'https://yaseen-velvet-table.netlify.app/images/image28.jpg', desc: 'Refreshing mixed fruit drinks with ice.' },
  { id:13, cat: 'Drinks',       name: 'Signature Rainbow Cocktail',price:32.99, img: 'https://yaseen-velvet-table.netlify.app/images/image25.jpg', desc: 'Colorful layered drinks with fruit syrups.' },
  { id:14, cat: 'Drinks',       name: 'Lime Mint Sparkler',       price: 20.00, img: 'https://yaseen-velvet-table.netlify.app/images/image36.jpg', desc: 'Sparkling drink with fresh lime and mint.' },
  { id:15, cat: 'Drinks',       name: 'Sunrise Citrus Cooler',    price: 25.00, img: 'https://yaseen-velvet-table.netlify.app/images/image38.jpg', desc: 'Sparkling orange mocktail with cherry garnish.' },
]

const REVIEWS = [
  { id:1, name:'Sophia Martinez', role:'Food Critic',       initials:'SM', text:'An absolutely unforgettable dining experience. Every dish was a masterpiece — the lamb chops melted in my mouth.' },
  { id:2, name:'James Thornton',  role:'Regular Guest',     initials:'JT', text:'The Velvet Table never disappoints. The charcuterie board and mocktails are an absolute must-try.' },
  { id:3, name:'Aisha Rahman',    role:'Travel Blogger',    initials:'AR', text:'I visited while traveling and this place blew me away. The matcha soft serve alone is worth the visit!' },
  { id:4, name:'Lucas Fontaine',  role:'Chef & Restaurateur',initials:'LF',text:'As someone in the industry, I am truly impressed. The attention to detail and flavor profiles are extraordinary.' },
]

const CATS = ['All', 'Appetizers', 'Main Courses', 'Desserts', 'Drinks']

// ── DISH CARD component ────────────────────────────────
function DishCard({ dish, onAddToCart }) {
  const [added, setAdded] = useState(false)

  function handleAdd() {
    onAddToCart(dish)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="dish-card">
      <div className="dish-img-wrap">
        <img src={dish.img} alt={dish.name} loading="lazy" />
        <span className="dish-tag">{dish.cat}</span>
      </div>
      <div className="dish-body">
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
        <div className="dish-foot">
          <span className="dish-price">${dish.price.toFixed(2)}</span>
          <button className={`add-btn ${added ? 'added' : ''}`} onClick={handleAdd}>
            {added ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── STAT CARD — sirf static numbers dikhata hai ────────
function StatCard({ target, suffix, label }) {
  return (
    <div className="stat-card">
      <span className="stat-num">{target}{suffix}</span>
      <span className="stat-lbl">{label}</span>
    </div>
  )
}

// ── REVIEW CARD component ──────────────────────────────
function ReviewCard({ review, active }) {
  return (
    <div className={`review-card ${active ? 'active' : ''}`}>
      <div className="stars">★★★★★</div>
      <p className="review-text">"{review.text}"</p>
      <div className="review-author">
        <div className="avatar">{review.initials}</div>
        <div>
          <p className="r-name">{review.name}</p>
          <p className="r-role">{review.role}</p>
        </div>
      </div>
    </div>
  )
}

// ── MAIN VELVET component ──────────────────────────────
export default function Velvet({ onAddToCart }) {
  const [activeCat, setActiveCat] = useState('All')
  const [activeReview, setActiveReview] = useState(0)
  const [form, setForm] = useState({ name: '', phone: '', date: '', guests: '' })
  const [submitted, setSubmitted] = useState(false)

  // useEffect — auto rotate reviews
  useEffect(() => {
    const t = setInterval(() => setActiveReview(p => (p + 1) % REVIEWS.length), 4000)
    return () => clearInterval(t)
  }, [])

  const filtered = activeCat === 'All' ? DISHES : DISHES.filter(d => d.cat === activeCat)

  function handleFormChange(e) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '', date: '', guests: '' }) }, 3000)
  }

  return (
    <main>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="est">Est. 2019 · Fine Dining Experience</p>
          <h1>Where Every<br /><em>Dish Tells a Story</em></h1>
          <p className="hero-sub">Indulge in our carefully crafted dishes made with the finest ingredients, served with passion in an elegant atmosphere.</p>
          <div className="hero-btns">
            <a href="#menu" className="btn-gold">Explore Menu</a>
            <a href="#contact" className="btn-outline">Make a Reservation</a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <StatCard target={5}     suffix="+" label="Years of Excellence" />
        <StatCard target={120}   suffix="+" label="Dishes on Menu" />
        <StatCard target={15000} suffix="+" label="Happy Guests" />
        <StatCard target={12}    suffix=""  label="Award Wins" />
      </section>

      {/* ── MENU ── */}
      <section className="menu-section" id="menu">
        <div className="sec-header">
          <p className="sec-tag">Our Selection</p>
          <h2>Signature Dishes</h2>
          <p className="sec-sub">Discover our Chef's creations crafted with passion and the finest ingredients.</p>
        </div>

        {/* Category filter — useState */}
        <div className="filters">
          {CATS.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCat === cat ? 'active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dish grid — .map() */}
        <div className="dish-grid">
          {filtered.map(dish => (
            <DishCard key={dish.id} dish={dish} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="reviews-section" id="reviews">
        <div className="sec-header">
          <p className="sec-tag">Guest Experiences</p>
          <h2>What Our Guests Say</h2>
        </div>
        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.id} review={r} active={i === activeReview} />
          ))}
        </div>
        <div className="dots">
          {REVIEWS.map((_, i) => (
            <button key={i} className={`dot ${i === activeReview ? 'active' : ''}`} onClick={() => setActiveReview(i)} />
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="about-text">
            <p className="sec-tag">Our Story</p>
            <h2>Crafted with Passion</h2>
            <p>Founded in 2019, The Velvet Table was born from a simple belief: that dining should be an experience that touches all the senses.</p>
            <p>Every dish that leaves our kitchen carries hours of preparation, deep respect for tradition, and an unrelenting pursuit of perfection.</p>
            <div className="about-tags">
              <span>🌿 Farm-to-Table</span>
              <span>👨‍🍳 Award-Winning Chefs</span>
              <span>🍷 Curated Wine List</span>
              <span>✨ Private Dining</span>
            </div>
          </div>
          <div className="about-imgs">
            <img src="https://yaseen-velvet-table.netlify.app/images/image16.jpg" alt="dish" className="big" />
            <img src="https://yaseen-velvet-table.netlify.app/images/image27.jpg" alt="dessert" />
            <img src="https://yaseen-velvet-table.netlify.app/images/image25.jpg" alt="drink" />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <p className="sec-tag">Get In Touch</p>
            <h2>Make a Reservation</h2>
            <p>Reserve your table and let us craft an unforgettable evening for you.</p>
            <div className="c-details">
              <p>📍 123 Gourmet Street, Food City</p>
              <p>📞 03113404105</p>
              <p>✉️ pirzadamuhammadyaseen6@gmail.com</p>
              <p>🕐 Mon–Fri: 11am–10pm &nbsp;|&nbsp; Sat: 10am–11pm &nbsp;|&nbsp; Sun: 10am–9pm</p>
            </div>
          </div>

          {/* Controlled form — useState */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="success">
                <p>🎉</p>
                <h3>Reservation Received!</h3>
                <p>We will confirm your booking shortly.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <input name="name"   value={form.name}   onChange={handleFormChange} placeholder="Full Name"       required />
                  <input name="phone"  value={form.phone}  onChange={handleFormChange} placeholder="Phone Number"    required />
                </div>
                <div className="form-row">
                  <input name="date"   type="date" value={form.date}   onChange={handleFormChange} />
                  <input name="guests" type="number" min="1" max="20" value={form.guests} onChange={handleFormChange} placeholder="No. of Guests" />
                </div>
                <button type="submit" className="btn-gold">Confirm Reservation</button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <h3 className="footer-logo">The Velvet <span>TABLE</span></h3>
            <p>Experience the finest dining with our carefully crafted menu and exceptional service.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-links">
            <h4>Hours</h4>
            <p>Mon–Fri: 11am – 10pm</p>
            <p>Saturday: 10am – 11pm</p>
            <p>Sunday: 10am – 9pm</p>
          </div>
        </div>
        <p className="footer-copy">© 2025 The Velvet Table · Built with React ⚛️</p>
      </footer>

    </main>
  )
}
