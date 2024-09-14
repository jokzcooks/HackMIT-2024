import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from '../Home';
import Header from '../../components/Header';

const Base = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/home");
    }
  }, [navigate, location.pathname]);

  return (
    <div className='mainContainer'>
        <Header />
        <Routes>
            <Route path='/home' element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default Base;
