import '../css/brand.css';
import TV from '../components/VideoHandling';
import Texts from '../texts';

const Brand = () => (
    <section id="brand">
        <div className="brand-left">
            <div className="brand-left-content">
                <TV />
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

export default Brand;