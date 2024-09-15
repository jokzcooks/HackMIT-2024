import { SignedIn, SignedOut } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginPage from "../containers/Login";
import TestLand from "../containers/TestLand";
import LandingPage from "../containers/LandingPage";

const AppRoutes = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
  }, [location])

  return (
    <div className='mainContainer'>
      <Header />
      <Routes>

        <Route path="/"  element={ <SignedOut><LandingPage /></SignedOut> }/>
        <Route path="/landing"  element={ <SignedIn><TestLand/></SignedIn> }/>
        <Route path="/login" element={ <SignedOut><LoginPage /></SignedOut> }/>
        
        {/* Catch-all route to redirect unauthorized access */}
        {/* <Route path="*" element={<SignedOut><LoginPage /></SignedOut>} /> */}
      
      </Routes>
    </div>
  );
};

export default AppRoutes;
