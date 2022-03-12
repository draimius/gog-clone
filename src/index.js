import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultContextProvider } from './contexts/ResultContextProvider';

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById('root')
);

//when using context and router the main app must be wrapped in those compoenets

//review all code match
//get all functionality working (update code ect... tech changes, api changes ext...)
///create env's for the api key
//check all
//run build
//drap and drop the build into netlify and deploy it
//donzo (get working on personal project)
