
import { Navbar, Header, Source, Intro, GetStarted, Brand, Lists, ContactUs, Footer } from './layouts';
import { SoundHandler } from './components';

const App = () => {
    return (
        <div id="app">
            <SoundHandler />
            <Navbar />
            <Header />
            <Source />
            <Intro />
            <GetStarted />
            <Brand />
            <Lists />
            <ContactUs />
            <Footer />
        </div>
    );
}
export default App