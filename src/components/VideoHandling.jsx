import '../css/videoHandling.css';
import { Tv, Chat, Space, XOXO_com } from '../videos';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

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
        </video >
    );
};

export const ContactUsVideo = () => (
    <video id="contactUsVideo" controls ref={target}>
        <source src={XOXO_com} type="video/mp4" />
    </video>
);

export default TV;