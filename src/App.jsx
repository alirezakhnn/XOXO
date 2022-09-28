
import { Navbar, Header, Source, Intro, GetStarted, Brand, Lists, ContactUs } from './layouts';

import './app.css';

const App = () => {
    return (
        <div id="app">
            <Navbar />
            <Header />
            <Source />
            <Intro />
            <GetStarted />
            <Brand />
            <Lists />
            <ContactUs />
        </div>
    );
}
export default App