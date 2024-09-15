import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./App.css";
import AuthStatus from "./components/AuthStatus/index.jsx"; // Importing AuthStatus if needed
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <Context />
    </Router>
  );
}

const Context = ({}) => {
  const location = useLocation();

  return (
      <div className="container max-w-2xl flex flex-col gap-8">
      {/* <AuthStatus /> */}
      <div className="flex justify-center items-start min-h-screen">
        <AppRoutes />
      </div>
    </div>

  )
}

export default App;