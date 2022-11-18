import '../css/header.css';
import Texts from '../texts';

const Header = () => (
    <header id='header'>
        <div className="left-header">
            <h2 className="left-header-title">{Texts[0].header.title}</h2>
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