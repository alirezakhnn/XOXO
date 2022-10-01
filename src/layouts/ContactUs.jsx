
import '../css/contactUs.css';
import Texts from '../texts';
import { useVideoAutoPlayback } from '../components';
import { XOXO_com } from '../videos';

const ContactUs = () => {
    const [containerRef, videoRef] = useVideoAutoPlayback({
        root: null,
        rootMargin: '50px',
        threshold: 0.2,
    });
    return (
        <div id="ContactUs">
            <div className="above-contactus" ref={containerRef}>
                <video id="contactUsVideo" ref={videoRef} loop autoPlay >
                    <source src={XOXO_com} type="video/mp4" />
                    your browser does not support the video tag.
                </video>
            </div>
            <div className="below-contactus">
                <p className="below-contactus-context">{Texts[0].contactus.below.context}</p>
            </div>
        </div>
    );
}

export default ContactUs