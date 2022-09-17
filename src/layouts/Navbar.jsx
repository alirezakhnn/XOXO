import { useState, Fragment } from 'react';
import '../css/navbar.css';
import { Input } from '../components';
import { Link } from 'react-router-dom';
import { profile_nina, menu, close } from '../assets';
import Users from '../styles';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <Fragment>
            <div className="hamburger-menu">
                <img src={toggle ? close : menu} alt="hamburger"
                    onClick={() => {
                        setToggle(prev => !prev);
                        document.body.classList.toggle('mobile-navbar-appear');
                    }}
                />
            </div>
            <div className=" mobile-left-navbar left-navbar">
                <div className="logo">
                    <h1><Link id="xoxo" to="/">XOXO</Link></h1>
                </div>
                <div className="profile">
                    <img id="user" src={profile_nina} alt="profile" />
                    <h3 id="username">{Users[2].username}</h3>
                </div>
            </div>
            <section id="navbar">
                <div className="left-navbar">
                    <div className="logo">
                        <h1><Link id="xoxo" to="/">XOXO</Link></h1>
                    </div>
                    <div className="profile">
                        <img id="user" src={profile_nina} alt="profile" />
                        <h3 id="username">Nina</h3>
                    </div>
                </div>
                <div className="right-navbar">
                    <ul className="right-navbar-list">
                        <li><Link to="/your-panel" id="panel">Panel</Link></li>
                        <li><Link to="/menu" id="menu">Menu</Link></li>
                        <li><Link to="/about" id="about">About</Link></li>
                    </ul>
                    <div className="sign">
                        <h2 id="signin">signIn</h2>
                        <Input id="signup" type="submit" value="signUp" />
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Navbar