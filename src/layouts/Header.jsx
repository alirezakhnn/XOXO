import '../css/header.css';
import Texts from '../texts';
const Header = () => {
    return (
        <header id='header'>
            <div className="right-header">
                <h2 className="right-header-title">
                    A Chatbox <br /> for instant <br /> messages <br /> or something <br /> like that
                </h2>
                <p className="right-header-context">{Texts[0].header.right.context}</p>
            </div>
            <div className="left-header">
                <div className="left-header-first">
                    <p className='left-header-first-context'>{Texts[0].header.right.above}</p>
                </div>
                <div className="left-header-second">
                    <p className="left-header-second-context">{Texts[0].header.right.below}</p>
                </div>
            </div>
        </header>
    );
}

export default Header