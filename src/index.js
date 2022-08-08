import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global/>
    <App /> 

    
  </React.StrictMode>
);


