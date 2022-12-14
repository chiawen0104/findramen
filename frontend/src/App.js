import './App.css';
import { React, useState, useEffect } from 'react'
import RestaurantPage from './container/restaurantPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './container/searchPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/restaurant/:id" element={<RestaurantPage />} />
            </Routes>
        </Router>
    );
}

export default App;
