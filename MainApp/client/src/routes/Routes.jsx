import { SignedIn, SignedOut } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginPage from "../containers/Login";
import TestLand from "../containers/TestLand";
import LandingPage from "../containers/LandingPage";
import ResumePage from "../containers/Resume";
import ChatBox from "../containers/Chat/chat";
import SuggestedProfiles from "../containers/People/people";
import Profile from "../containers/Profile";
import TeamPage from "../containers/Team/hackmit";

const AppRoutes = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
  }, [location])

  return (
    <div className='mainContainer'>
      <Header />
      <Routes>

        {
        /* <Route path="/"  element={ <SignedOut><LandingPage /></SignedOut> }/>
        <Route path="/landing"  element={ <SignedIn><TestLand/></SignedIn> }/>
        <Route path="/login" element={ <SignedOut><LoginPage /></SignedOut> }/>
        <Route path="/resume" element={ <SignedOut><LoginPage /></SignedOut> }/>
         */
        }
        <Route path="/"  element={ <LandingPage /> }/>
        <Route path="/landing"  element={ <TestLand/> }/>
        <Route path="/login" element={ <LoginPage /> }/>
        <Route path="/resume" element={ <ResumePage />}/>
        <Route path="/team" element={ <TeamPage />}/>
        <Route path="/people" element={ <SuggestedProfiles />}/>
        <Route path="/chat" element={ <ChatBox />}/>
        <Route path="/profile" element={ <Profile/>}/>
        
        {/* Catch-all route to redirect unauthorized access */}
        {/* <Route path="*" element={<SignedOut><LoginPage /></SignedOut>} /> */}
      
      </Routes>
    </div>
  );
};

export default AppRoutes;
