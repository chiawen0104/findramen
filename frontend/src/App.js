import './App.css';
import { React, useState, useEffect } from 'react'
import MainPage from './container/mainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <MainPage />
            <Routes>
                

            </Routes>

        </Router>
    );
}

export default App;
