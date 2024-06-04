import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

const myElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
root.render(

    myElement
  
);

