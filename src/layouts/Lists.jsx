import '../css/lists.css';
import Texts from '../texts';

const Lists = () => (
    <div id="Lists">
        <div className="first-list-content">
            <ul className="first-list">
                <li className="first-list-title">{Texts[0].listComp.first.title}</li>
                <p className="first-list-context">{Texts[0].listComp.first.context}</p>
            </ul>
        </div>
        <div className="second-list-content">
            <ul className="second-list">
                <li className="second-list-title">{Texts[0].listComp.second.title}</li>
                <p className="second-list-context">{Texts[0].listComp.second.context}</p>
            </ul>
        </div>
        <div className="third-list-content">
            <ul className="third-list">
                <li className="third-list-title">{Texts[0].listComp.third.title}</li>
                <p className="third-list-context">{Texts[0].listComp.third.context}</p>
            </ul>
        </div>
        <div className="forth-list-content">
            <ul className="forth-list">
                <li className="forth-list-title">{Texts[0].listComp.forth.title}</li>
                <p className="forth-list-context">{Texts[0].listComp.forth.context}</p>
            </ul>
        </div>
    </div>
);


export default Lists