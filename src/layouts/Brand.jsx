import '../css/brand.css';
import Texts from '../texts';
import { Tv } from '../videos';
import { useVideoAutoPlayback } from '../components';

const Brand = () => {
    const [containerRef, videoRef] = useVideoAutoPlayback({
        root: null,
        rootMargin: '50px',
        threshold: 0.2,
    });
    return (
        <section id="brand">
            <div className="brand-left">
                <div className="brand-left-content" ref={containerRef}>
                    <video id="tv" ref={videoRef} loop autoPlay>
                        <source src={Tv} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="brand-right">
                <div className="brand-right-content">
                    <h4 className='brand-right-content-context'>{Texts[0].brand.rightContext}</h4>
                    <p className="brand-right-content-subcontext">{Texts[0].brand.rightSubcontex}</p>
                </div>
            </div>
        </section>
    );
}

export default Brand;