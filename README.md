# SwiftCraft E-Commerce Application

## Description

SwiftCraft is a modern, responsive e-commerce web application built with Svelte. It showcases a catalog of products fetched from the Fake Store API, allowing users to browse, search, filter, and view detailed information about products.

## Features

- Display a grid of products with essential information
- Filter products by category
- Sort products by price (ascending and descending)
- Search products by name
- View detailed information about a specific product
- Responsive design for mobile and desktop views

## Technology Stack

- Svelte: A modern JavaScript framework for building user interfaces
- Svelte Routing: For handling client-side routing
- Tailwind CSS: For styling and responsive design
- Font Awesome: For icons
- Fake Store API: For fetching product data

## Project Structure
Certainly! Here's a detailed README file for your project:
markdownCopy# SwiftCraft E-Commerce Application

## Description

SwiftCraft is a modern, responsive e-commerce web application built with Svelte. It showcases a catalog of products fetched from the Fake Store API, allowing users to browse, search, filter, and view detailed information about products.

## Features

- Display a grid of products with essential information
- Filter products by category
- Sort products by price (ascending and descending)
- Search products by name
- View detailed information about a specific product
- Responsive design for mobile and desktop views

## Technology Stack

- Svelte: A modern JavaScript framework for building user interfaces
- Svelte Routing: For handling client-side routing
- Tailwind CSS: For styling and responsive design
- Font Awesome: For icons
- Fake Store API: For fetching product data

## Project Structure
swiftcraft/
│
├── public/
│   ├── index.html
│   └── global.css
│
├── src/
│   ├── components/
│   │   ├── FilterSort.svelte
│   │   ├── Navbar.svelte
│   │   ├── ProductCard.svelte
│   │   └── ProductGrid.svelte
│   │
│   ├── pages/
│   │   ├── Home.svelte
│   │   └── ProductDetails.svelte
│   │
│   ├── App.svelte
│   ├── main.js
│   └── api.js
│
├── package.json
├── rollup.config.js
└── README.md

## Setup and Installation

1. Clone the repository:
git clone https://github.com/neomosotho/NEOMOS378_BCL2401_GroupA_Neo_Mosotho_JSF02.git

2. Install dependencies:
npm create vite@latest --template svelte
npm install tailwindcss postcss autoprefixer
npm install svelte-routing
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons

3. Start the development server:
npm run dev

5. Open your browser and visit `http://localhost:5000`

## API Integration

This project uses the Fake Store API to fetch product data. The API calls are centralized in the `src/api.js` file. If you want to replace it with a different API, you'll need to update the functions in this file.

## Components

### Navbar
The top navigation bar of the application.

### FilterSort
Handles category filtering, price sorting, and product search functionality.

### ProductGrid
Displays the grid of product cards.

### ProductCard
Individual product card displaying essential product information.

## Pages

### Home
The main page displaying the product grid with filtering and sorting options.

### ProductDetails
Detailed view of a single product.

## Routing

The application uses Svelte Routing for client-side navigation:
- `/`: Home page with product grid
- `/product/:id`: Individual product details page

## Styling

The project uses Tailwind CSS for styling. The main Tailwind configuration is in `tailwind.config.js`. Custom styles can be added in `public/global.css`.