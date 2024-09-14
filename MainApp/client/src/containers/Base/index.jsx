import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

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
        <Routes>
        </Routes>
    </div>
  );
}

export default Base;
