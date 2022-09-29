
import { Navbar, Header, Source, Intro, GetStarted, Brand, Lists, ContactUs } from './layouts';

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