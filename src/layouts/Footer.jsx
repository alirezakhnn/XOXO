import '../css/footer.css';
import Texts from '../texts';
import { Link } from 'react-router-dom';
import { Github, Instagram, Telegram } from 'react-bootstrap-icons';
import { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <div className="curve-border">
                <svg id="curvedBorder" height="150px" viewBox="0 0 1440 181" preserveAspectRatio="none" className="c-PJLV c-PJLV-ifGHEql-css">
                    <path d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z" fill="#111215" fillRule="nonzero" stroke="none" strokeWidth="1"></path>
                </svg>
            </div>
            <footer id="footer">
                <div className="logo footer-logo">
                    <h1><Link id={Texts[0].id} to="/">{Texts[0].logo}</Link></h1>
                </div>
                <FooterLinks />
                <div className="footer-svgs">
                    <a href="#">
                        <Github className="footer-github" size={30} />
                    </a>
                    <a href="#">
                        <Instagram className="footer-instagram" size={30} />
                    </a>
                    <a href="#">
                        <Telegram className="footer-telegram" size={30} />
                    </a>
                </div>
            </footer >
        </Fragment>
    );
}

const FooterLinks = () => (
    <div className="footer-links">
        <ul className="footer-links-list">
            <a href="#">
                <li className="footer-links-list1">welcome</li>
            </a><a href="#">
                <li className="footer-links-list2">designs</li>
            </a><a href="#">
                <li className="footer-links-list3">xoxo</li>
            </a><a href="#">
                <li className="footer-links-list4">bootstrap</li>
            </a><a href="#">
                <li className="footer-links-list5">xoxo</li>
            </a><a href="#">
                <li className="footer-links-list6">github</li>
            </a><a href="#">
                <li className="footer-links-list7">instagram</li>
            </a><a href="#">
                <li className="footer-links-list8">twitter</li>
            </a><a href="#">
                <li className="footer-links-list9">telegram</li>
            </a><a href="#">
                <li className="footer-links-list10">xoxo.com</li>
            </a><a href="#">
                <li className="footer-links-list11">tailwind</li>
            </a><a href="#">
                <li className="footer-links-list12">scss</li>
            </a>
            <a href="#">
                <li className="footer-links-list1">welcome</li>
            </a><a href="#">
                <li className="footer-links-list2">designs</li>
            </a><a href="#">
                <li className="footer-links-list3">xoxo</li>
            </a><a href="#">
                <li className="footer-links-list4">bootstrap</li>
            </a><a href="#">
                <li className="footer-links-list5">xoxo</li>
            </a><a href="#">
                <li className="footer-links-list6">github</li>
            </a><a href="#">
                <li className="footer-links-list7">instagram</li>
            </a><a href="#">
                <li className="footer-links-list8">twitter</li>
            </a><a href="#">
                <li className="footer-links-list9">telegram</li>
            </a><a href="#">
                <li className="footer-links-list10">xoxo.com</li>
            </a><a href="#">
                <li className="footer-links-list11">tailwind</li>
            </a><a href="#">
                <li className="footer-links-list12">scss</li>
            </a>
        </ul>
    </div>
);

export default Footer