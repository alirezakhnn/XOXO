
import '../css/intro.css';
import Texts from '../texts';
import { Space } from '../videos';
import { useVideoAutoPlayback } from '../components';

const Intro = () => {
    const [containerRef, videoRef] = useVideoAutoPlayback({
        root: null,
        rootMargin: '50px',
        threshold: 0.2,
    });
    return (
        <section id="intro">
            <div className="left-intro">
                <div className="left-content">
                    <img id={Texts[0].intro.left.img.id}
                        src={Texts[0].intro.left.img.src}
                        alt={Texts[0].intro.left.img.id} />
                    <h4 id={Texts[0].intro.left.subtitle.id}>
                        {Texts[0].intro.left.subtitle.content}
                    </h4>
                </div>
            </div>
            <div className="right-intro">
                <div className="right-content" ref={containerRef}>
                    <video id="chatbox-intro" ref={videoRef} loop autoPlay>
                        <source src={Space} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p className="right-content-intro-context">
                        {Texts[0].intro.right.content}
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Intro