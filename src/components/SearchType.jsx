import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Results from './Results';

const SearchType = () => {
  const location = useLocation();
  const setPath = (value) => {
    location.pathname = value;
  };
  return (
    <div className="p-4">
      <Routes>
        {location.pathname === '/' && setPath('/search')}
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};

export default SearchType;
