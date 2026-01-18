ecommerce-fullstack/
├─ README.md
├─ .gitignore
├─ backend/
│  ├─ package.json
│  ├─ server.js
│  ├─ .env.example
│  └─ src/
│     ├─ models/
│     │   ├─ User.js
│     │   ├─ Product.js
│     │   └─ Order.js
│     ├─ routes/
│     │   ├─ auth.routes.js
│     │   ├─ product.routes.js
│     │   └─ order.routes.js
│     └─ middleware/
│         └─ error.middleware.js
└─ frontend/
   ├─ package.json
   ├─ index.html
   ├─ tailwind.config.js
   ├─ postcss.config.js
   ├─ .env.example
   └─ src/
      ├─ main.jsx
      ├─ App.jsx
      ├─ api/
      │   └─ api.js
      ├─ components/
      │   ├─ Navbar.jsx
      │   ├─ ProductCard.jsx
      │   └─ CartItem.jsx
      └─ pages/
          ├─ Home.jsx
          ├─ Product.jsx
          ├─ Admin.jsx
          └─ Cart.jsx
