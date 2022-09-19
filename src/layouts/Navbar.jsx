import { useState, Fragment } from 'react';
import '../css/navbar.css';
import { Input } from '../components';
import { Link } from 'react-router-dom';
import { profile_nina, menu, close } from '../assets';
import Users from '../styles';
import Texts from '../texts';

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
                    <h1><Link id={Texts[0].id} to="/">{Texts[0].logo}</Link></h1>
                </div>
                <div className="profile">
                    <img id="user" src={profile_nina} alt="profile" />
                    <h3 id="username">{Users[2].username}</h3>
                </div>
            </div>
            <section id="navbar">
                <div className="left-navbar">
                    <div className="logo">
                        <h1><Link id={Texts[0].id} to="/">{Texts[0].logo}</Link></h1>
                    </div>
                    <Link to="/your-panel" className="profile">
                        <div className="profile">
                            <img id="user" src={profile_nina} alt="profile" />
                            <h3 id="username">Nina</h3>
                        </div>
                    </Link>
                </div>
                <div className="right-navbar">
                    <ul className="right-navbar-list">
                        <li><Link to="/your-panel" id="panel">{Texts[0].navbar.first}</Link></li>
                        <li><Link to="/menu" id="menu">{Texts[0].navbar.second}</Link></li>
                        <li><Link to="/about" id="about">{Texts[0].navbar.third}</Link></li>
                    </ul>
                    <div className="sign">
                        <h2><Link to="/sign-in" id="signin">{Texts[0].sign.in}</Link></h2>
                        <Link to="/sign-up"><Input id="signup" type="submit" value={Texts[0].sign.up} /></Link>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Navbar