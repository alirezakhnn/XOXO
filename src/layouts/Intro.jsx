
import '../css/intro.css';
import Texts from '../texts';

const Intro = () => (
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
            <div className="right-content">
                <img id={Texts[0].intro.right.img.id}
                    src={Texts[0].intro.right.img.src}
                    alt={Texts[0].intro.right.img.id}
                />
                <p className="right-content-intro-context">
                    {Texts[0].intro.right.content}
                </p>
            </div>
        </div>
    </section>
);

export default Intro