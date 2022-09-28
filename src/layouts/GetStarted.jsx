
import '../css/getStarted.css';
import Texts from '../texts';
import { Input } from '../components';
import { Link } from 'react-router-dom';

const GetStarted = () => (
    <section id="GetStarted">
        <div className="left-getstarted">
            <p className="left-getstarted-context">{Texts[0].getStarted.left.context}</p>
        </div>
        <div className="right-getstarted">
            <Link to="/sign-in">
                <Input id="GetStarted-btn" type="button" value="GetStarted" />
            </Link>
        </div>
    </section>
);

export default GetStarted