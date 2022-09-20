import { Fragment, useState } from 'react';
import '../css/signup.css';
import Input from './Input';
import { Sign_btn, Form, Switcher_sign_in_up } from './Signin';
import Texts from '../texts';

const Signup = () => (
    <section id="SignUp">
        <div className="left-content-signup">
            <Privacy />
            <CheckBox />
        </div>
        <div className="right-content-signup">
            <Wave_1 />
            <Switcher_sign_in_up className="switcher" to="/sign-in" context="already have an account" />
        </div>
    </section>
);

export const Privacy = () => {
    const [active, setActive] = useState(true);
    if (active) {
        return (
            <div id="privacy">
                <h1 id="privacy-title">
                    {Texts[0].privacy.context_first}
                    <span className="span-origin" id="readmore"
                        onClick={() => { setActive(prev => !prev) }} >
                        Read more...
                    </span>
                </h1>
            </div >
        );
    }
    else {
        return (
            <div id="privacy">
                <h1 id="privacy-title">
                    {Texts[0].privacy.context_second}
                    <span className="span-origin" id="readless"
                        onClick={() => { setActive(prev => !prev) }} >
                        Read less...
                    </span>
                </h1>
            </div >
        );
    }
};

export const CheckBox = () => (
    <Fragment>
        <div id="checkbox">
            <Input id="agree-signup" type="checkbox" />
            <span className="span-origin">{Texts[0].privacy.chechbox_1}</span>
        </div>
        <div id="checkbox">
            <Input id="agree-signup" type="checkbox" />
            <span className="span-origin">{Texts[0].privacy.checkbox_2}</span>
        </div>
        <Sign_btn value="sign up" />
    </Fragment>
);

export const Wave_1 = () => (
    <div id="wave1">
        <Form google={Texts[0].sign_google.signup} repeat={<Input id="password" type="password" placeholder="repeat password" />} />
    </div>
);

export default Signup