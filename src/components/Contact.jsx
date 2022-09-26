import '../css/contact.css';
import { Link } from 'react-router-dom';
import Users, { Me } from '../styles';
import { PersonPlusFill } from 'react-bootstrap-icons';

const Contacts = () => {
    return (
        <div id="contacts">
            <div className="left-contacts">
                <div className="left-contacts-content">
                    <Link to="/your-panel" className="left-contacts-content-you">
                        <img id="contacts-user" src={Me.img} alt="user-profile" />
                        <h1 id="contacts-user-h1">{Me.username}</h1>
                    </Link>
                </div>
            </div>
            <div className="center-contacts">
                <div className="center-contacts-content">
                    {Users.map(user => (
                        <Link to={user.id} className="center-contacts-users">
                            <div className="user-contact">
                                <img id={user.id} src={user.img} alt={user.id} />
                                <h5 className="user-contact-username">{user.username}</h5>
                            </div>
                            <p className="user-subtext">{user.subtext}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="right-contacts">
                <div className="right-contacts-content">
                    <Link to="/add-contacts">
                        <PersonPlusFill id="add-contact" size={55} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contacts