import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css'
import Dashboard from './components/Dashboard';
import Breakfast from './components/Foods/BreakFast';
import CustomerForm from './components/CustomerForm';
import Cart from './components/Cart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      
  
  <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/customer-form" element={<CustomerForm/>} />
    <Route path="/breakfast" element={<Breakfast/>} />
    <Route path="/cart" element={<Cart/>} />
   
    </Routes>
  

</BrowserRouter>
)
