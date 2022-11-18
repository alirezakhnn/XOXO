import { useState, Fragment } from 'react';
import '../css/navbar.css';
import { Input } from '../components';
import { Link } from 'react-router-dom';
import { menu, close } from '../assets';
import { Me } from '../styles';
import Texts from '../texts';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [stickedNav, setStickedNav] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 5 && window.innerWidth >= 1250) {
            setStickedNav(true);
        } else {
            setStickedNav(false);
        }
    })

    return (
        <Fragment>
            <div className="hamburger-menu">
                <img id="hamburger" src={toggle ? close : menu} alt="hamburger"
                    onClick={() => {
                        toggle ? document.body.classList.remove('mobile-navbar-appear') : document.body.classList.toggle('mobile-navbar-appear');
                        setToggle(prev => !prev);
                    }}
                />
            </div>
            <div className=" mobile-left-navbar left-navbar">
                <div className="logo">
                    <h1><Link id={Texts[0].id} to="/">{Texts[0].logo}</Link></h1>
                </div>
                <div className="profile">
                    <img id="user" src={Me.img} alt="profile" />
                    <h3 id="username">{Me.username}</h3>
                </div>
            </div>
            <section className={stickedNav ? 'colored-nav' : 'navbar'}>
                <div className="left-navbar">
                    <div className="logo">
                        <h1><Link id={Texts[0].id} to="/">{Texts[0].logo}</Link></h1>
                    </div>
                    <Link to="/your-panel" className="profile">
                        <div className="profile">
                            <img id="user" src={Me.img} alt={Me.id} />
                            <h3 id="username">{Me.username}</h3>
                        </div>
                    </Link>
                </div>
                <div className="right-navbar">
                    <ul className="right-navbar-list">
                        <li><Link to="/your-panel" id="panel">{Texts[0].navbar.first}</Link></li>
                        <li><Link to="/contacts" id="Contacts">{Texts[0].navbar.second}</Link></li>
                        <li><Link to="/setting" id="setting">{Texts[0].navbar.third}</Link></li>
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
