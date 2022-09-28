import '../css/videoHandling.css';
import { Tv, Chat, Space, XOXO_com } from '../videos';

const TV = () => (
    <video id="tv" controls>
        <source src={Tv} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
);

export const ChatVideo = ({ id }) => {
    return (
        <video id={id}>
            <source src={Chat} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export const SpaceVideo = ({ id }) => {

    return (
        <video id={id} controls>
            <source src={Space} type="video/mp4" />
            Your browser does not support the video tag.
        </video >
    );
};

export const ContactUsVideo = () => (
    <video id="contactUsVideo" controls >
        <source src={XOXO_com} type="video/mp4" />
        your browser does not support the video tag.
    </video>
);

export default TV;