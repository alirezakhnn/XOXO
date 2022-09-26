import '../css/signin.css';
import Input from './Input';
import { Meteorite } from '../assets';
import { Me } from '../styles';
import Texts from '../texts';
import { Link } from 'react-router-dom';
import { Google } from 'react-bootstrap-icons';

const Signin = () => (
    <section id="SignIn">
        <div className="left-signin">
            <img id="meteorite" src={Meteorite} alt="meteorite" />
            <h3 className="left-signin-title">
                Welcome back to xoxo<br /> We missed you so much<br />Enjoy new features
            </h3>
        </div>
        <div className="right-signin">
            <Link to="/your-panel" className="above-signin">
                <img id="signin-user" src={Me.img} alt="user-profile" />
                <h1 id={Me.id}>{Me.username}</h1>
            </Link>
            <Form google={Texts[0].sign_google.signin} />
            <Sign_btn value="sign in" />
            <Switcher_sign_in_up to="/sign-up" context="create an Account" />
        </div>
    </section>
);

export const Sign_btn = ({ value }) => (
    <Link to="/"><Input id="submit-signin" type="submit" value={value} /></Link>
);

export const Signin_google = ({ text }) => (
    <button type="button" id="signin-google">
        {text}
        <Google />
    </button>
);

export const Switcher_sign_in_up = ({ context, to, className }) => (
    <Link id="createAccount" className={className} to={to}>{context}</Link>
);

export const Form = ({ google, repeat }) => (
    <form id="form" action="<?= PHP_SELF>">
        <Input id="email" type="email" placeholder="email" />
        <Input id="password" type="password" placeholder="password" />
        {repeat}
        <Signin_google text={google} />
    </form>
);

export default Signin