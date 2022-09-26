import '../css/source.css';
import Texts from '../texts';
import { Github, Instagram, Telegram } from 'react-bootstrap-icons';
const Source = () => (
    <section id="source">
        <div className="source-left">
            <div className="introduction">
                <fieldset className="introduction-fieldset">
                    <legend id="intro-legend">{Texts[0].source.legend}</legend>
                    <h4 id="introduction">{Texts[0].source.field}</h4>
                </fieldset>
            </div>
        </div>
        <div className="source-right">
            <div className="source-right-svg">
                <a href="#">
                    <Github id="github" size={45} />
                </a>
                <a href="#">
                    <Instagram id="instagram" size={45} />
                </a>
                <a href="#">
                    <Telegram id="telegram" size={45} />
                </a>
            </div>
        </div>
    </section>
);

export default Source