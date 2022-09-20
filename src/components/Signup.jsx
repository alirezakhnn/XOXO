import { Fragment, useState } from 'react';
import '../css/signup.css';
import Input from './Input';
import { Sign_btn } from './Signin';
import Texts from '../texts';

const Signup = () => (
    <section id="SignUp">
        <div className="left-content-signup">
            <Privacy />
            <CheckBox />
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
            <span className="span-origin">agree with policy and privacy</span>
        </div>
        <div id="checkbox">
            <Input id="agree-signup" type="checkbox" />
            <span className="span-origin">receive our services of xoxo features</span>
        </div>
        <Sign_btn />
    </Fragment>
);

export default Signup