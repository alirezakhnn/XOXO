
import '../css/contactUs.css';
import { ContactUsVideo } from '../components/VideoHandling';
import Texts from '../texts';

const ContactUs = () => (
    <div id="ContactUs">
        <div className="above-contactus">
            <ContactUsVideo />
        </div>
        <div className="below-contactus">
            <p className="below-contactus-context">{Texts[0].contactus.below.context}</p>
        </div>
    </div>
);

export default ContactUs