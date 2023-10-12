// Import the React object from the 'react' module.
import React from "react";
// import StricMode from "react";

// Import the ReactDOM object but specifically its 'client' part.
// This is used for rendering React components to the DOM.
import ReactDOM from "react-dom/client";

// Import the main App component from 'App.jsx'.
import App from "./App.jsx";

// Initialize and render the React application.
// 'createRoot' is a method for enabling concurrent mode in React,
// which allows React to work on multiple tasks simultaneously.
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode is a wrapper component that checks for potential problems in the app during development.
  <React.StrictMode>
    {/* Render the main App component */}
    <App />
  </React.StrictMode>
);
