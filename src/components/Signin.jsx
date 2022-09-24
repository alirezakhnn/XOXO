import '../css/signin.css';
import Input from './Input';
import { profile_nina, Meteorite } from '../assets';
import Users from '../styles';
import Texts from '../texts';
import { Link } from 'react-router-dom';

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
                <img id="signin-user" src={Users[2].img} alt="user-profile" />
                <h1 id={Users[2].id}>{Users[2].username}</h1>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
        </svg>
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