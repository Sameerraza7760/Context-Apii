// Router.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import StudentCard from './StudentCard';
import StudentForm from './StudentForm';
import Cart from './cart';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<StudentForm />} />
        <Route path="/Card" element={<StudentCard />} />
        <Route path='/Cart' element={<Cart/>} ></Route>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
