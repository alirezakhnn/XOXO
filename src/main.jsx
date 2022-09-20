import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RouterComps from './RouterComps';
import './main.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <RouterComps />
    </StrictMode>
);