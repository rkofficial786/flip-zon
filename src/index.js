import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/productcontex';
import { FilterContextProvider } from './context/filtercontext';
import {CartProvider} from "./context/cartContext"
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <BrowserRouter>
  <AppProvider>
    <FilterContextProvider>
     <CartProvider>
     <Toaster/>
    <App />
    </CartProvider>
    
    </FilterContextProvider>
    </AppProvider>
    </BrowserRouter>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
