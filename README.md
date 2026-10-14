# Food Management System

A responsive food ordering web app built with React and Vite. The project presents a modern restaurant-style experience where users can browse dishes, filter by category, add items to a cart, proceed to checkout, and sign in from a modal popup.

This repository currently contains the frontend portion of the application. It is designed as a polished UI prototype for a food delivery / ordering experience.

## Features

- Hero section and restaurant-style landing page
- Category filtering for menu items
- Product cards with pricing and add-to-cart controls
- Shopping cart with quantity updates and totals
- Checkout flow with order summary
- Sign-in modal and navigation
- Responsive layout for desktop and mobile screens

## Tech Stack

- React 19
- Vite
- React Router DOM
- CSS modules / component styles
- JavaScript (ES modules)

## Project Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal, typically:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev      # start the Vite dev server
npm run build    # create an optimized production build
npm run preview  # preview the production build locally
npm run lint     # run project lint checks
```

## Notes

- The app uses a client-side shopping cart and static menu data from the local asset files.
- There is no backend API or database connected in this repository yet.
- This is best suited for frontend UI development, prototype demos, or extending into a full food ordering system.

## Future Enhancements

- Connect to a real backend API
- Add authentication and user accounts
- Implement persistent cart storage
- Add order placement and payment integration
- Support admin menu management

## License

This project does not currently include a license file. If you plan to distribute or reuse it, add an appropriate license before publishing.
