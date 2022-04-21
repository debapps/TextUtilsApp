import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import App from './App';


ReactDOM.render(
  <Router>
    <App heading = "Text Utility App" name = "Debaditya"/>
  </Router>,
  document.getElementById('root')
);


