import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Onebox from './components/Onebox';
import ReplyBox from './components/ReplyBox';
import DarkModeToggle from './components/DarkModeToggle';
import './index.js'
const App = () => (
    <Router>
        <div className="app">
            <DarkModeToggle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/onebox" element={<Onebox />} />
                <Route path="/reply/:threadId" element={<ReplyBox />} />
            </Routes>
        </div>
    </Router>
);

export default App;
