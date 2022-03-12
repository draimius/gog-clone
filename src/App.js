import React, { useState } from 'react';
import Footer from './components/Footer';
import SearchType from './components/SearchType';
import NavBar from './components/NavBar';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <NavBar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <SearchType />
        <Footer />
      </div>
    </div>
  );
};

export default App;
