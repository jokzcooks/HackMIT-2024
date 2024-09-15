import { SignedIn, SignedOut } from "@clerk/clerk-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
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
      {/* <Route path="*" element={<SignedOut><LoginPage /></SignedOut>} /> */}
    
    </Routes>
  );
};

export default AppRoutes;
