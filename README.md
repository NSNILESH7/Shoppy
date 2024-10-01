# E-Commerce Website (MERN Stack)

This is a full-stack E-Commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The website allows users to browse products, add items to their cart, and proceed with secure checkout.

## Features

- **User Authentication**: Register, login, and manage accounts securely using JWT.
- **Product Browsing**: View products by categories, search functionality.
- **Shopping Cart**: Add products to the cart, view items, and modify quantities.
- **Payment Integration**: Seamless payment processing via Stripe (or any other gateway).
- **Admin Dashboard**: Manage products, orders, and users through an admin interface.
- **Order Management**: Users can view their order history, and admins can update order statuses.
- **Responsive Design**: Mobile-friendly layout for an optimal user experience on all devices.

## Tech Stack

- **Frontend**: React.js, Redux for state management, Bootstrap for styling.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose for ODM).
- **Authentication**: JSON Web Tokens (JWT) and BCrypt for password hashing.
- **Payment Integration**: Stripe API (or PayPal).
- **Database**: MongoDB for storing user, product, and order information.

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ecommerce-mern.git
    cd ecommerce-mern
    ```

2. Install dependencies:
    ```bash
    # Backend dependencies
    cd backend
    npm install
    
    # Frontend dependencies
    cd ../frontend
    npm install
    ```

3. Create a `.env` file in the backend folder and add the following environment variables:
    ```bash
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret_key
    STRIPE_SECRET=your_stripe_secret_key
    ```

4. Start the development server:
    ```bash
    # Backend (runs on port 5000)
    cd backend
    npm run backebd
    
    # Frontend (runs on port 3000)
    cd ../frontend
    npm ren frontend
    ```
    # Both Forntend & Backeend
   npm run dev

6. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

![Course Thumbnail](/thumb.png)



## Folder Structure

```bash
ecommerce-mern/
│
├── backend/            # Express.js server, API routes, MongoDB models
├── frontend/           # React app, Redux for state management
└── README.md           # Project documentation
