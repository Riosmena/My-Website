import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import GlobalStyle from './Themes/GlobalTheme';
import Typography from './Themes/Typography';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <GlobalStyle />
      <Typography />
      <App />
    </Router>
  </>
);