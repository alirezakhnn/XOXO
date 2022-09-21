import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signin, Signup, Panel } from './components';
import App from './App';

const RouterComps = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/sign-in" element={<Signin />} />
            <Route exact path="/sign-up" element={<Signup />} />
            <Route exact path="/your-panel" element={<Panel />} />
        </Routes>
    </Router>
);

export default RouterComps