import './App.css';
import { React, useState, useEffect } from 'react'
import MainPage from './container/mainPage';
import RestaurantPage from './container/restaurantPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewPage from './container/reviewPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/restaurant" element={<RestaurantPage />} />
            </Routes>
        </Router>
    );
}

export default App;
