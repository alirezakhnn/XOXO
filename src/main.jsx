import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signin } from './components';
import App from './App';
import './main.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/sign-in" element={<Signin />} />
            </Routes>
        </Router>
    </StrictMode>
);