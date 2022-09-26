import '../css/panel.css';
import { Me } from '../styles';
import { Link } from 'react-router-dom';
import Input from './Input';
import Texts from '../texts';
import { GearFill } from 'react-bootstrap-icons';

const Panel = () => {
    return (
        <div id="Panel">
            <div className="left-panel">
                <div className="left-panel-content">
                    <img id="panel-user-img" src={Me.img} alt="" />
                    <h3 id="panel-user-context">{Me.username}</h3>
                </div>
                <div className="panel-home-btn">
                    <Link to="/"><Input id="signup" type="button" value="Home" /></Link>
                </div>
            </div>
            <div className="center-panel">
                <div className="center-panel-content">
                    <img className="center-panel-img" src={Me.img} alt="user-profile" />
                    <div className="center-panel-section1">
                        <label className="panel-label" htmlFor="">{Texts[0].panel_label.section1}</label>
                        <Input className="email-panel" type="text" value="Nina" readOnly />
                    </div>
                    <div className="center-panel-section2">
                        <label className="panel-label" htmlFor="">{Texts[0].panel_label.section2}</label>
                        <Input className="password-panel" type="text" value="****" readOnly />
                    </div>
                    <div className="center-panel-section3">
                        <label className="panel-label" htmlFor="">{Texts[0].panel_label.section3}</label>
                        <Input className="email-panel" type="text" value="Nina28@gmail.com" readOnly />
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
                        <GearFill id="settings" size={50} />
                    </Link>
                </div>
            </div>
        </div>
    );
}



export default Panel