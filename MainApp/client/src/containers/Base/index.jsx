import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from '../LandingPage';
import Header from '../../components/Header';
import ResumePage from '../Resume';

const Base = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {

    }
  }, [navigate, location.pathname]);

  return (
    <div className='mainContainer'>
        <Header />
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/resume' element={<ResumePage/>} />
        </Routes>
    </div>
  );
}

export default Base;
