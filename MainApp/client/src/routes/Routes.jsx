import { SignedIn, SignedOut } from "@clerk/clerk-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultPage from "../containers/Default/Default";
import LandingPage from "../containers/Landing/LandingPage";
import LoginPage from "../containers/Register/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default route for all users */}
      <Route 
        path="/" 
        element={<DefaultPage />} 
      />

      {/* Route for signed-in users */}
      <Route 
        path="/landing" 
        element={
          <SignedIn>
            <LandingPage />
          </SignedIn>
        } 
      />

      {/* Route for unsigned users */}
      <Route 
        path="/login" 
        element={
          <SignedOut>
            <LoginPage />
          </SignedOut>
        } 
      />
      
      {/* Catch-all route to redirect unauthorized access */}
      <Route path="*" element={<SignedOut><LoginPage /></SignedOut>} />
    </Routes>
  );
};

export default AppRoutes;
