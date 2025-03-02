# Full-Stack E-Commerce Application

This is a full-stack e-commerce application built with a React-based client and an Express.js server. The client-side application uses state management with `useReducer` and `Context API`, and employs React Router DOM for multi-page navigation. Axios is used for fetching data from the server to populate product information. The server-side API is built with Express.js and MongoDB, providing robust and scalable backend services.

## Features

### Client

- **React Router**: Client-side routing using `react-router-dom`.
- **Context API**: State management using React Context for categories, cart, and user.
- **Components**: Modular components for header, home, cart, single product, admin, profile, etc.
- **CSS**: Styling using CSS files.
- **Search Bar**: Enhance user experience by providing a search functionality that allows users to quickly find products based on keywords. Utilizes `useReducer` for managing search state and updating product display accordingly.
- **Category Options**: Simplify product browsing by offering category filters. Users can easily explore products within specific categories, improving navigation and user engagement.
- **Image Slider**: Provide an interactive and visually appealing way to showcase product images. Users can view multiple images of a product through a slider interface, enhancing product visibility and presentation.
- **State Management**: Ensure efficient and scalable state management throughout the application. Utilizes `useReducer` and `Context API` to centralize and manage application state, resulting in a more organized and maintainable codebase.
- **Routing**: Implement React Router DOM for seamless navigation across multiple pages. Users can easily navigate between different sections of the application, such as product listings, individual product pages, and the shopping cart, enhancing overall user experience and usability.
- **API Integration**: Fetch product data from an external API to dynamically populate the application with up-to-date product information. By integrating with an external API, the application ensures that users have access to the latest product listings and details, improving data accuracy and relevance.

### Server

- **Express**: Server-side framework for handling HTTP requests.
- **Mongoose**: MongoDB object modeling for Node.js.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Environment Variables**: Configuration using `.env` file.
- **Controllers**: Logic for handling requests and responses.
  - `user.js`: Handles user-related operations such as getting all users, getting user by ID, creating a user, and getting user by login.
  - `item.js`: Handles item-related operations such as getting all items, getting item by ID, creating an item, updating an item, and deleting an item.
- **Routes**: Defines API endpoints.
  - `user.js`: Routes for user operations.
  - `item.js`: Routes for item operations.
- **Services**: Business logic for interacting with the database.

## Live Demo

Check out the live demo hosted on Netlify: [E-commerce App](https://aecommerceapp.netlify.app/)

Link: [https://aecommerceapp.netlify.app/](https://aecommerceapp.netlify.app/)