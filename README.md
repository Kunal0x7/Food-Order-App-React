# 🍔 Food Order App

<div align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Context API](https://img.shields.io/badge/Context_API-State_Management-green)
![Custom Hooks](https://img.shields.io/badge/Custom_Hooks-React-purple)
![License](https://img.shields.io/badge/Status-Live-success)

### A Modern React-Based Food Ordering Application

Browse meals, manage your cart, and place orders through a seamless checkout experience powered by React, Context API, Reducers, and Custom Hooks.

🌐 **Live Demo:** https://food-order-app-react-frontend.onrender.com/

</div>

---

## 📖 Overview

Food Order App is a modern Single Page Application (SPA) built using React.js. The project simulates a real-world food ordering platform where users can explore available meals, add items to a cart, manage quantities, and complete an order through a streamlined checkout process.

The application focuses on modern React development practices including:

- Component-Based Architecture
- Context API for Global State Management
- Reducer Pattern for Complex State Updates
- Custom Hooks for Reusable Logic
- Asynchronous Data Handling
- Error and Loading State Management
- Reusable UI Components

---

## ✨ Features

### 🍽️ Meal Browsing
- View available meals dynamically
- Clean and responsive meal cards
- Easy navigation and user-friendly interface

### 🛒 Shopping Cart
- Add items to cart
- Remove items from cart
- Increase or decrease quantities
- Dynamic cart updates
- Real-time total price calculation

### 📝 Checkout Process
- Customer information form
- Order summary before submission
- Form data handling using React

### ⚡ User Experience
- Loading indicators during requests
- Error handling and feedback
- Modal-based cart and checkout flow
- Responsive design

### 🔧 Advanced React Concepts
- Global state management using Context API
- State updates managed through Reducers
- Custom HTTP Hook for:
  - Fetching meal data
  - Submitting order data
- Reusable UI Components
- Separation of concerns

---

## 🚀 Tech Stack

### Frontend Technologies

| Technology | Purpose |
|------------|----------|
| React.js | UI Development |
| JavaScript (ES6+) | Application Logic |
| HTML5 | Structure |
| CSS3 | Styling |
| Context API | Global State Management |
| useReducer | Complex State Updates |
| Custom Hooks | Reusable Business Logic |

---

## 🏗️ Architecture

The application follows a modular architecture to ensure maintainability and scalability.

```bash
src/
│
├── components/
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Header.jsx
│   ├── Meal.jsx
│   ├── Meals.jsx
│   │
│   └── UI/
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Modal.jsx
│       └── Error.jsx
│
├── store/
│   ├── CartContext.jsx
│   └── UserProgressContext.jsx
│
├── Hooks/
│   └── useHttp.js
│
├── util/
│   └── currencyFormatter.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧠 Key React Concepts Implemented

### 🎯 Context API

Used for managing application-wide state without prop drilling.

Examples:
- Cart State
- Checkout Progress State

---

### 🎯 Reducer Pattern

Implemented using `useReducer()` to handle complex cart operations:

- Add Item
- Remove Item
- Update Quantity
- Clear Cart

Benefits:

- Predictable State Updates
- Better Scalability
- Cleaner Logic Separation

---

### 🎯 Custom Hook

Built a reusable custom hook:

```javascript
useHttp()
```

Responsibilities:

- Fetching meals data
- Sending order data
- Managing loading state
- Managing error state
- Reusable request handling logic

This reduces code duplication and improves maintainability.

---

### 🎯 Component Reusability

Reusable UI components include:

- Button
- Input
- Modal
- Error Component

Benefits:

- Cleaner codebase
- Better maintainability
- Improved scalability

---

## 🔄 Application Flow

```text
Load Application
        │
        ▼
Fetch Meals
        │
        ▼
Display Available Meals
        │
        ▼
Add Items To Cart
        │
        ▼
Manage Quantities
        │
        ▼
Open Checkout
        │
        ▼
Fill Customer Details
        │
        ▼
Submit Order
        │
        ▼
Show Success/Error State
```

---

## 🎯 What I Learned

Through this project, I strengthened my understanding of:

✅ React Component Architecture

✅ Context API

✅ Reducer-Based State Management

✅ Custom Hook Development

✅ Form Handling

✅ Asynchronous JavaScript

✅ Error Handling

✅ Loading States

✅ Reusable Component Design

✅ Clean Code Principles

✅ Frontend Application Architecture

---

## 💻 Installation

### Clone Repository

```bash
git clone https://github.com/Kunal0x7/Food-Order-App-Demo.git
```

### Navigate Into Project

```bash
cd Food-Order-App-Demo
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

---

## 📸 Screenshots

Add screenshots here for better project presentation.

### Home Page

```markdown
![Home Page](./screenshots/home.png)
```

### Cart

```markdown
![Cart](./screenshots/cart.png)
```

### Checkout

```markdown
![Checkout](./screenshots/checkout.png)
```

---

## 🌟 Future Improvements

- User Authentication
- Search & Filter Meals
- Dark Mode
- Order History
- Payment Gateway Integration
- Meal Categories
- Wishlist Feature

---

## 🔗 Live Project

### 🚀 Visit Here

👉 https://food-order-app-react-frontend.onrender.com/

---

## 👨‍💻 Author

### Kunal Ranjan

📧 kunal.singh.07007@gmail.com

💼 LinkedIn: https://www.linkedin.com/in/kunal-ranjan-b4ab70284

🐙 GitHub: https://github.com/Kunal0x7

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

Made with ❤️ using React.js

</div>
