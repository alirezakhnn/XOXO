import '../css/panel.css';
import Users from '../styles';
import { Link } from 'react-router-dom';
import Input from './Input';
import Texts from '../texts';

const Panel = () => {
    return (
        <div id="Panel">
            <div className="left-panel">
                <div className="left-panel-content">
                    <img id="panel-user-img" src={Users[2].img} alt="" />
                    <h3 id="panel-user-context">{Users[2].username}</h3>
                </div>
                <div className="panel-home-btn">
                    <Link to="/"><Input id="signup" type="button" value="Home" /></Link>
                </div>
            </div>
            <div className="center-panel">
                <div className="center-panel-content">
                    <img className="center-panel-img" id="signin-user" src={Users[2].img} alt="user-profile" />
                    <div className="center-panel-section1">
                        <label htmlFor="">{Texts[0].panel_label.section1}</label>
                        <Input type="text" id="email" value="Nina" readOnly />
                    </div>
                    <div className="center-panel-section2">
                        <label htmlFor="">{Texts[0].panel_label.section2}</label>
                        <Input type="text" id="password" value="****" readOnly />
                    </div>
                    <div className="center-panel-section3">
                        <label htmlFor="">{Texts[0].panel_label.section3}</label>
                        <Input type="text" id="email" value="Nina28@gmail.com" readOnly />
                    </div>
                </div>
            </div>
            <div className="center-panel-buttons">
                <Input type="button" id="signup" value="Edit" />
                <Input type="button" id="delete" value="Log Out" />
            </div>
            <div id="right-panel">
                <div className="right-panel-content">
                    <Link to="/setting">
                        <svg id="settings" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Panel