import '../css/contact.css';
import { Link } from 'react-router-dom';
import Users from '../styles';

const Contacts = () => {
    return (
        <div id="contacts">
            <div className="left-contacts">
                <div className="left-contacts-content">
                    <Link to="/your-panel" className="above-signin">
                        <img id="contacts-user" src={Users[2].img} alt="user-profile" />
                        <h1 id="contacts-user-h1">{Users[2].username}</h1>
                    </Link>
                </div>
            </div>
            <div className="center-contacts">
                <div className="center-contacts-content">
                    {Users.map(user => (
                        <div className="center-contacts-users">
                            <div className="user-contact">
                                <img id={user.id} src={user.img} alt={user.id} />
                                <h5 className="user-contact-username">{user.username}</h5>
                            </div>
                            <p className="user-subtext">{user.subtext}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-contacts">
                <div className="right-contacts-content">
                    <Link to="/add-contacts">
                        <svg id="add-contact" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contacts