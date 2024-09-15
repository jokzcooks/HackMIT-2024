import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./App.css";
import AuthStatus from "./components/AuthStatus"; // Importing AuthStatus if needed
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

const MainContent = () => {
  const location = useLocation();

  return (
    <main className="container max-w-2xl flex flex-col gap-8">
      {/* Only display the header on the login page */}
      {location.pathname === "/login" && (
        <h1 className="text-4xl font-extrabold my-8 text-center">
          Takathon Login
        </h1>
      )}
      <AuthStatus /> {/* Optional: display authentication status */}
      <div className="flex justify-center items-start min-h-screen">
        <AppRoutes />
      </div>
    </main>
  );
};

export default App;
