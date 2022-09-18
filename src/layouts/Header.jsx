import '../css/header.css';
import Texts from '../texts';
const Header = () => (
    <header id='header'>
        <div className="left-header">
            <h2 className="left-header-title">
                A Chatbox <br /> for instant <br /> messages <br /> or something <br /> like that
            </h2>
            <p className="left-header-context">{Texts[0].header.right.context}</p>
        </div>
        <div className="right-header">
            <div className="right-header-first">
                <p className='right-header-first-context'>{Texts[0].header.right.above}</p>
            </div>
            <div className="right-header-second">
                <p className="right-header-second-context">{Texts[0].header.right.below}</p>
            </div>
        </div>
    </header>
);


export default Header